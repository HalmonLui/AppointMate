import json
from dotenv import load_dotenv
from square.client import Client
import pymongo
import os
import sys
import random
sys.path.insert(1, './discoverpage/')
sys.path.insert(2, './square-api/customer-api/')
sys.path.insert(3, './square-api/payments-api/')

from discoverpage_metrics import get_recommended_posts, get_trending_posts, get_hot_deals
from create_customercard import CustomerCardCreation
cc = __import__("create-customer")
pc = __import__("create-payment")

# APPOINTMENTS
def getAppointments():
    appointments = []
    return json.dumps(appointments), 200

def addAppointment():
    return {'success': 'appointment successfully created'}, 200


# LOYALTIES
def getLoyalties():
    loyalties = []
    return json.dumps(loyalties), 200

def updateLoyalty():
    return {'success': 'loyalty successfully updated'}, 200


# SAVED
def getSaved():
    load_dotenv()
    client = pymongo.MongoClient(os.getenv("MONGO_NORM_USER"))
    db = client["customer"]["customers"]
    """
    SELECT saved_business FROM customers
    where id = XTGNQH10VCVVS9VBPW61218X0M
    """
    # id for Tanjiwou
    saved = db.find({"id": "XTGNQH10VCVVS9VBPW61218X0M"},
                    {"saved_business": 1, "_id": 0 })

    return json.dumps(list(saved), default=str), 200

def addSaved():
    load_dotenv()
    client = pymongo.MongoClient(os.getenv("MONGO_NORM_USER"))
    db = client["customer"]["customers"]
    """
    SELECT saved_business FROM customers
    where id = XTGNQH10VCVVS9VBPW61218X0M
    """
    # id for Tanjiwou
    db2 = client["business"]["2020-06-30"]
    mongo_data = list(db2.find({}))
    r_biz = random.sample(mongo_data, 1)
    data = list(db.find({"id": "XTGNQH10VCVVS9VBPW61218X0M"}))
    db.update_one({"_id": data[0]["_id"]},
                   {"$push": {"saved_business": r_biz[0] }})
    return {'success': 'saved item successfully created'}, 200

def removeSaved():
    load_dotenv()
    client = pymongo.MongoClient(os.getenv("MONGO_NORM_USER"))
    db = client["customer"]["customers"]
    data = list(db.find({"id": "XTGNQH10VCVVS9VBPW61218X0M"}))
    db.update_one({"_id": data[0]["_id"]},
                    {"$pop": {"saved_business": 1}})

    return {'success', 'saved item successfully removed'}, 200

# BUSINESSES
def getBusinesses():
    load_dotenv()
    client = pymongo.MongoClient(os.getenv("MONGO_NORM_USER"))
    db = client["business"]
    col = db["2020-06-29"]
    data = list(col.find({}))
    test = {
      "trending": get_trending_posts(data, 'n/a', 3),
      "recommendations": get_recommended_posts(data, 'n/a', 4),
      "hot": get_hot_deals(data, 'n/a')
    }
    return json.dumps(test, default=str), 200


# CREDITCARD
def getCards():
    load_dotenv()

    square_client = Client(
        access_token=os.getenv("SQUARE_ACCESS_TOKEN"),
        environment="sandbox"
    )

    customers_api = square_client.customers
    # id for UwU OwO
    result = customers_api.retrieve_customer("J9XYVXV5Z4SZ77PT2NRN72XFQC")

    cards = result.body["customer"]["cards"]
    return json.dumps(cards, default=str), 200

def addCard():
    card = CustomerCardCreation(customer_id="J9XYVXV5Z4SZ77PT2NRN72XFQC")
    card.get_customer()
    card.gen_body("cnon:CBASEDmLIA4zG9Q1-4VtReIEmzw")
    card.add_card_to_square()
    card.update_db()
    return {'success': 'card successfully created'}, 200

def removeCard():
    load_dotenv()

    square_client = Client(
        access_token=os.getenv("SQUARE_ACCESS_TOKEN"),
        environment="sandbox"
    )

    customers_api = square_client.customers
    customer_id = "J9XYVXV5Z4SZ77PT2NRN72XFQC"
    card_id = "ccof:8ywRmjQ3OeRVtRjT3GB"
    result = customers_api.delete_customer_card(customer_id, card_id)

    return {'success': 'card successfully removed'}, 200

# Customer Creation
def createCustomer():
    # new one
    customer = cc.CustomerCreation(
      name="Ai Hayasaka",
      address="750 Post St, San Francisco, CA 94109",
      note="User input user"
    )
    customer.gen_body()
    customer.create_payment_dict()
    customer.add_to_db()

    return json.dumps(customer.result, default=str), 200

# PAYMENTS
def sendPayment():
    # id for Amelia
    payment = pc.PaymentCreation(customer_id="11MVK1PCRRVY1D9QB72HVT64PM",
                                  amount=80,
                                  source_id="ccof:cegcXjydMLiVlDQk3GB",
                                  tip=5)
    payment.gen_body()
    payment.create_payment_dict()

    return json.dumps(payment.result, default=str), 200


#if __name__ == "__main__":
  #print('Hello World')
  #getSaved()
