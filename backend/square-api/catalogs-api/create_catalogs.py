from square.client import Client
from dotenv import load_dotenv
import pymongo
import json
import os
import random 

class CatalogCreation(object):
    def __init__(self, service, amount):
        self.service = service
        self.amount= amount
    
    def gen_body(self):
        self.body = {
            "idempotency_key": "af3d1afc-7212-4300-b463-0bfc{n}14a5ae".format(n=random.randint(20, 56)),
            "object": {
                "type": 'ITEM',
                "id": '#Hair',
                "item_data": {
                    "name": self.service,
                    "description": "Salon service",
                    "abbreviation": "Hc",
                    "item_variation_data": {
                        "item_id": '#Haircut',
                        "name": "Full",
                        "pricing_type": "FIXED_PRICING",
                        "price_money": {
                            "amount": self.amount,
                            "currency": "USD"
                        }
                    }
                }
            }
        }
    
    def add_to_square(self):
        load_dotenv()

        square_client = Client(
            access_token=os.getenv("SQUARE_ACCESS_TOKEN"),
            environment="sandbox"
        )
        catalog_api = square_client.catalog
        result = catalog_api.upsert_catalog_object(self.body)

        if result.is_success():
            print(result.body)
        elif result.is_error():
            print(result.errors)
if __name__ == "__main__":
    test = CatalogCreation("Haircut", 70)
    test.gen_body()
    test.add_to_square()
    """
    load_dotenv()

    square_client = Client(
        access_token=os.getenv("SQUARE_ACCESS_TOKEN"),
        environment="sandbox"
    )
    body = {}
    catalog_api = square_client.catalog
    price_data = { "item_id": "#Coffee",
                    "name": "Regular",
                    "pricing_type": "FIXED_PRICING",
                    "price_money": {
                    "amount": 250,
                    "currency": "USD"
    }}
    
    body['idempotency_key'] = 'af3d1afc-7212-4300-b463-0bfc5314a5ae'
    body['object'] = {}
    body['object']['type'] = 'ITEM'
    body['object']['id'] = '#Cocoa'
    body['object']['item_data'] = {}
    body['object']['item_data']['name'] = 'Cocoa'
    body['object']['item_data']['description'] = 'Hot chocolate'
    body['object']['item_data']['abbreviation'] = 'Ch'
    body['object']['item_data']['item_variation_data'] = price_data



    result = catalog_api.upsert_catalog_object(body)

    if result.is_success():
        print(result.body)
    elif result.is_error():
        print(result.errors)
    """