import json
from dotenv import load_dotenv
import pymongo
import os
import sys
sys.path.insert(1, './discoverpage/')
sys.path.insert(2, './square-api/customer-api/')
sys.path.insert(3, './square-api/payments-api/')

from discoverpage_metrics import get_recommended_posts, get_trending_posts, get_hot_deals
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
    where id = YZSXRJQTCGVSZ7DXGGXNYEY6ER
    """
    saved = db.find({"id": "YZSXRJQTCGVSZ7DXGGXNYEY6ER"},
                    {"saved_business": 1, "_id": 0 })
    
    return json.dumps(list(saved), default=str), 200

def addSaved():
    return {'success': 'saved item successfully created'}, 200

def removeSaved():
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
    cards = []
    return json.dumps(cards), 200

def addCard():
    return {'success': 'card successfully created'}, 200

def removeCard():
    return {'success': 'card successfully removed'}, 200

# Customer Creation
def createCustomer():
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
