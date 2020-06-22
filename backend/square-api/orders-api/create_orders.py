from square.client import Client
from dotenv import load_dotenv
import pymongo
import json
import os
import random 

class OrderCreation(object):
    def __init__(self, order, location_id):
        self.order = order
        self.location_id = location_id
    
    def gen_body(self):
        self.body = {
             "order": self.order,
            "idempotency_key": "af3d1afc-7212-4300-b463-0bfc{n}14a5ae".format(n=random.randint(70, 86)),
        }

    def add_to_square(self):
        load_dotenv()

        square_client = Client(
            access_token=os.getenv("SQUARE_ACCESS_TOKEN"),
            environment="sandbox"
        )
        orders_api = square_client.orders

        result = orders_api.create_order(self.location_id, self.body)

        if result.is_success():
            print(result.body)
        elif result.is_error():
            print(result.errors)

