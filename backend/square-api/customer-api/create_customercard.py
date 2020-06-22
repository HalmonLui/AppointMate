from square.client import Client
from dotenv import load_dotenv
import pymongo
import json
import os

class CustomerCardCreation(object):
    def __init__(self, customer_id):
        self.customer_id = customer_id
    
    def get_customer(self):
        load_dotenv()

        square_client = Client(
            access_token=os.getenv("SQUARE_ACCESS_TOKEN"),
            environment="sandbox"
        )

        customers_api = square_client.customers
        result = customers_api.retrieve_customer(self.customer_id)

        self.body = result.body["customer"]
    
    def gen_body(self, nonce):
        self.card_dict = {
            "card_nonce": nonce,
            "billing_address": {
                "address_line_1": self.body["address"]["address_line_1"],
                #"address_line_2": self.body["address"]["address_line_2"],
                "locality": self.body["address"]["locality"],
                "administrative_district_level_1": self.body["address"]["administrative_district_level_1"],
                "postal_code": self.body["address"]["postal_code"],
                "country": "US"
            },
            "cardholder_name": self.body["given_name"] + self.body["family_name"]
        }
    
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
    
    def update_db(self):
        load_dotenv()
        mongo_client = pymongo.MongoClient(os.getenv("MONGO_NORM_USER"))
        db = mongo_client["customer"]["customers"]

        square_client = Client(
            access_token=os.getenv("SQUARE_ACCESS_TOKEN"),
            environment="sandbox"
        )

        customers_api = square_client.customers
        result = customers_api.retrieve_customer(self.customer_id)

        mongo_data = list(db.find({"id": self.customer_id}))
        db.replace_one({"_id": mongo_data[0]["_id"]},
                        result.body["customer"])



if __name__ == "__main__":
    test = CustomerCardCreation(customer_id="J9XYVXV5Z4SZ77PT2NRN72XFQC")
    #test.get_customer()
    #test.gen_body("cnon:CBASEMKt979gWDs_2NZaZDazBEI")
    #test.add_card_to_square()
    test.update_db()
