from square.client import Client
from dotenv import load_dotenv
import pymongo
import json
import os
import random

class PaymentCreation(object):
    def __init__(self, customer_id, amount, source_id, tip=None):
        self.customer_id = customer_id
        self.amount = amount * 100
        self.source_id = source_id
        self.tip = tip
        if not self.tip:
            self.tip = 0
        else:
            self.tip = self.tip * 100
        self.idempotency_key = '4935a656-a929-4792-b97c-8848be85c{n}c'.format(n=random.randint(28, 56))

    def gen_body(self):
        self.body = {}
        money_dict = self.gen_money_dict()
        self.body["source_id"] = self.source_id
        self.body["idempotency_key"] = self.idempotency_key
        self.body["amount_money"] = money_dict[0]
        self.body["app_fee_money"] = money_dict[1]
        self.body["tip_money"] = money_dict[2]
        self.body["autocomplete"] = True
        self.body["customer_id"] = self.customer_id
        self.body["reference_id"] = '123456'
        self.body["note"] = 'Foo bar'

    def gen_money_dict(self):
        money_dict = [
            {   "amount": self.amount,
                "currency": "USD"
            },
            {
                "amount": 0.05 * self.amount,
                "currency": "USD"
            },
            {
                "amount": self.tip,
                "currency": "USD"
            }
        ]

        return money_dict
    
    def create_payment_dict(self):
        load_dotenv()
        client = Client(
            access_token=os.getenv("SQUARE_ACCESS_TOKEN"),
            environment="sandbox"
        )

        payments_api = client.payments
        result = payments_api.create_payment(self.body)

        if result.is_success():
            print(result.body)
        elif result.is_error():
            raise ValueError("payment failed")


if __name__ == "__main__":
    """
    test = PaymentCreation(customer_id="11MVK1PCRRVY1D9QB72HVT64PM",
                            amount=100,
                            source_id="ccof:cegcXjydMLiVlDQk3GB",
                            tip=2)
    test.gen_body()
    print(test.body)
    test.create_payment_dict()
    """
    load_dotenv()
    print(os.getenv("SQUARE_ACCESS_TOKEN"))
    client = Client(
        access_token=os.getenv("SQUARE_ACCESS_TOKEN"),
        environment="sandbox"
    )

    payments_api = client.payments
    """
    body = {}
    body['source_id'] = 'ccof:cegcXjydMLiVlDQk3GB'
    body['idempotency_key'] = '4935a656-a929-4792-b97c-8848be85c27c'
    body['amount_money'] = {}
    body['amount_money']['amount'] = 200
    body['amount_money']['currency'] = 'USD'
    body['app_fee_money'] = {}
    body['app_fee_money']['amount'] = 10
    body['app_fee_money']['currency'] = 'USD'
    body['autocomplete'] = True
    body['customer_id'] = '11MVK1PCRRVY1D9QB72HVT64PM'
    #body['location_id'] = 'XK3DBG77NJBFX'
    body['reference_id'] = '123456'
    body['note'] = 'Brief description'
    print(body)
    
    result = payments_api.create_payment(body)

    if result.is_success():
        print(result.body)
    elif result.is_error():
        print(result.errors)
    """
    result = payments_api.list_payments()

    if result.is_success():
        print(result.body)
        print(json.dumps(result.body, indent=4))
    elif result.is_error():
        print(result.errors)