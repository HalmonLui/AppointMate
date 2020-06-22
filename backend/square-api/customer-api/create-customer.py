from square.client import Client
from dotenv import load_dotenv
import pymongo
import os
from faker import Faker
from faker_e164.providers import E164Provider

class CustomerCreation(object):
    def __init__(self, name=None, address=None, phone_number=None, email_address=None, note='A note'):
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

if __name__ == "__main__":
    load_dotenv()
    print(os.getenv("SQUARE_ACCESS_TOKEN"))
    square_client = Client(
        access_token=os.getenv("SQUARE_ACCESS_TOKEN"),
        environment="sandbox"
    )

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

    customer_id = 'customer_id8'
    body = {}
    body['card_nonce'] = 'YOUR_CARD_NONCE'
    body['billing_address'] = {}
    body['billing_address']['address_line_1'] = '500 Electric Ave'
    body['billing_address']['address_line_2'] = 'Suite 600'
    body['billing_address']['locality'] = 'New York'
    body['billing_address']['administrative_district_level_1'] = 'NY'
    body['billing_address']['postal_code'] = '10003'
    body['billing_address']['country'] = 'US'
    body['cardholder_name'] = 'Amelia Earhart'

    result = customers_api.create_customer_card(customer_id, body)

    if result.is_success():
        print(result.body)
    elif result.is_error():
        print(result.errors)