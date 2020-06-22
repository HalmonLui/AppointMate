from square.client import Client
from dotenv import load_dotenv
import pymongo
import json
import os
from faker import Faker
from faker_e164.providers import E164Provider
import random

class CustomerCreation(object):
    def __init__(self, name=None, address=None, phone_number=None, email_address=None, note='A note',
                 add_card=False):
        self.name = name
        if not self.name:
            Faker.seed(0)
            fake = Faker()
            self.name = fake.name()
        
        self.given_name = self.name.split(' ')[0]
        self.family_name = self.name.split(' ')[1]

        self.address = address
        self.address_dict = self.clean_address(self.address)

        self.phone_number = phone_number
        if not self.phone_number:
            fake = Faker()
            fake.add_provider(E164Provider)
            rpn = fake.safe_e164(region_code="US")
            self.phone_number = rpn[1]+'-'+rpn[2:5]+'-'+rpn[5:8]+'-'+rpn[8:]
        
        self.note = note
        self.email_address = email_address
        if not self.email_address:
            self.email_address = self.given_name + self.family_name +'@gmail.com'
        
        self.add_card = add_card

    def clean_address(self, address):
        split_address = address.split(',')
        split_address = [s.lstrip().rstrip() for s in split_address]

        address_dict = {
            "address_line_1": "",
            "address_line_2": "",
            "locality": "",
            "administrative_district_level_1": "",
            "postal_code": "",
            "country": "US"
        }

        if len(split_address) == 3:
            address_dict["address_line_1"] = split_address[0]
            address_dict["locality"] = split_address[1]
            address_dict["administrative_district_level_1"] = split_address[2].split(' ')[0]
            address_dict["postal_code"] = split_address[2].split(' ')[1]
        else:
            address_dict["address_line_1"] = split_address[0]
            address_dict["address_line_2"] = split_address[1]
            address_dict["locality"] = split_address[2]
            address_dict["administrative_district_level_1"] = split_address[3].split(' ')[0]
            address_dict["postal_code"] = split_address[3].split(' ')[1]

        return address_dict

    def gen_body(self):
        self.body = {}
        self.body["given_name"] = self.given_name
        self.body["family_name"] = self.family_name
        self.body["email_address"] = self.email_address
        self.body["address"] = self.address_dict
        self.body["phone_number"] = self.phone_number
        self.body["note"] = self.note
    
    def gen_card_dict(self, nonce):
        self.card_dict = {
            "card_nonce": nonce,
            "billing_address": {
                "address_line_1": self.body["address"]["address_line_1"],
                "address_line_2": self.body["address"]["address_line_2"],
                "locality": self.body["address"]["locality"],
                "administrative_district_level_1": self.body["address"]["administrative_district_level_1"],
                "postal_code": self.body["address"]["postal_code"],
                "country": "US"
            },
            "cardholder_name": self.name
        }


    def create_customer_dict(self):
        load_dotenv()
        square_client = Client(
            access_token=os.getenv("SQUARE_ACCESS_TOKEN"),
            environment="sandbox"
        )
        customers_api = square_client.customers
        result = customers_api.create_customer(self.body)

        if result.is_success():
            #print(result.body)
            self.result = result.body
            self.customer_id = self.result["customer"]["id"]
        elif result.is_error():
            print(result.errors)
    
    def add_card_to_square(self):
        load_dotenv()

        square_client = Client(
            access_token=os.getenv("SQUARE_ACCESS_TOKEN"),
            environment="sandbox"
        )

        customers_api = square_client.customers

        res = customers_api.create_customer_card(self.customer_id, self.card_dict)

        if res.is_success():
            print(res.body)
            self.card_result = res.body
        elif res.is_error():
            print(res.errors)
    
    def add_to_db(self):
        load_dotenv()

        square_client = Client(
            access_token=os.getenv("SQUARE_ACCESS_TOKEN"),
            environment="sandbox"
        )

        customers_api = square_client.customers
        #result = customers_api.list_customers()
        result = customers_api.retrieve_customer(self.customer_id)

        if result.is_error():
            raise ValueError("Cannot get customer")

        data = result.body
        #print(json.dumps(data, indent=4))

        mongo_client = pymongo.MongoClient(os.getenv("MONGO_NORM_USER"))
        db = mongo_client["customer"]["customers"]
        db2 = mongo_client["business"]["2020-06-29"]
        mongo_data = list(db2.find({}))
        data["customer"]["saved_business"] = random.sample(mongo_data, 5)
        db.insert_one(data["customer"])
        

if __name__ == "__main__":
    test = CustomerCreation(name="UwU OwO",\
                address="754 Post St, San Francisco, CA 94109", note="Test user2")
    test.gen_body()
    test.create_customer_dict()
    #test.add_to_db()
    #test.gen_card_dict(nonce="cnon:CBASEGP_oIDbO7qsAIyzZWOsrwk")
    #test.add_card_to_square()
    test.add_to_db()
    """
    load_dotenv()
    print(os.getenv("SQUARE_ACCESS_TOKEN"))
    square_client = Client(
        access_token=os.getenv("SQUARE_ACCESS_TOKEN"),
        environment="sandbox"
    )
    
    customers_api = square_client.customers
    result = customers_api.list_customers()
    if result.is_success():
        print(json.dumps(result.body, indent=4))
        print(type(result.body))
    elif result.is_error():
        print(result.errors)
    """

    """
    # Get customer api
    body = {}
    body['given_name'] = 'Amelia'
    body['family_name'] = 'Earhart'
    body['email_address'] = 'Amelia.Earhart@example.com'
    body['address'] = {}
    body['address']['address_line_1'] = '500 Electric Ave'
    body['address']['address_line_2'] = 'Suite 600'
    body['address']['locality'] = 'New York'
    body['address']['administrative_district_level_1'] = 'NY'
    body['address']['postal_code'] = '10003'
    body['address']['country'] = 'US'
    body['phone_number'] = '1-212-555-4240'
    body['reference_id'] = 'YOUR_REFERENCE_ID'
    body['note'] = 'a customer'

    customers_api = square_client.customers
    result = customers_api.create_customer(body)

    if result.is_success():
        print(result.body)
    elif result.is_error():
        print(result.errors)
    """


    #customers_api = square_client.customers


    #customer_id = '11MVK1PCRRVY1D9QB72HVT64PM'
    """
    body = {}
    body['email_address'] = 'New.Amelia.Earhart@example.com'
    body['phone_number'] = ''
    body['note'] = 'updated customer note'
    body['customer_id'] = customer_id

    result = customers_api.update_customer(customer_id, body)

    if result.is_success():
        print(result.body)
    elif result.is_error():
        print(result.errors)
    """
    
    
    """
    
    body = {}
    body['card_nonce'] = 'cnon:CBASEH8_sI-8kIMraf38ezPEkzw'
    body['billing_address'] = {}
    body['billing_address']['address_line_1'] = '500 Electric Ave'
    body['billing_address']['address_line_2'] = 'Suite 600'
    body['billing_address']['locality'] = 'New York'
    body['billing_address']['administrative_district_level_1'] = 'NY'
    body['billing_address']['postal_code'] = '12345'
    body['billing_address']['country'] = 'US'
    body['cardholder_name'] = 'Amelia Earhart'

    result = customers_api.create_customer_card(customer_id, body)

    if result.is_success():
        print(result.body)
    elif result.is_error():
        print(result.errors)
    """