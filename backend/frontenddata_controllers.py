import json
from dotenv import load_dotenv
import pymongo
import os
import sys
#sys.path.insert(1, '/Users/sonamghosh/Desktop/square_hacks_2020/square-hackathon/backend/discoverpage/')
sys.path.insert(1, './discoverpage/')
from discoverpage_metrics import get_recommended_posts, get_trending_posts, get_hot_deals
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
    saved = []

    # Test data, comment out and add real logic to get saved info
    test = [
        {
            'business_id': '123abc',
            'image_url': 'https://garboasalon.com/img/HP_SLIDER1_garbo_aveda_hair_salon_spa_best_austin_hair_color_nails_top_hair_stylist_men_hair_cut_austin_78757_atx_78741_hair_salon_near_me_austin_hairdress.jpg',
            'title': 'Nicole Salon B',
            'address': '123 Beacon Street',
            'rating': '4.9',
            'num_ratings': '222'
        },
        {
            'business_id': '222yes',
            'image_url': 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
            'title': 'Nancys Salon',
            'address': '5 1st Street',
            'rating': '2.4',
            'num_ratings': '5892'
        },
        {
            'business_id': 'theEyeDee',
            'image_url': 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwOTrW1_BwLDStRVfYdQIVkNfT0nq6A_RPXA&usqp=CAU',
            'title': 'Barbaras Barber Shop',
            'address': '22 Gomugomu Street',
            'rating': '5.0',
            'num_ratings': '14'
        },
        {
            'business_id': 'legend27',
            'image_url': 'https://lh3.googleusercontent.com/proxy/Fq1F8znwQgu3Ne3B_T1KbtpoVBTFLf2VxbbSTj1JBJjnxtf5IFDJw2ev9MxtX0E0khZiayNXagEYO5a0Qhwgz_0GT1xnuq25adLI2_eRU4iY-FLtHlB2dWQ0WDlFkg',
            'title': 'Main Hair Shoppe',
            'address': '66 Pointy Road',
            'rating': '4.2',
            'num_ratings': '666'
        }
    ]
    saved = test

    return json.dumps(saved), 200

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

#if __name__ == "__main__":
 # getBusinesses()
