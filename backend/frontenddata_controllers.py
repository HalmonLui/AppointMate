import json
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
            'image_url': 'https://ca-times.brightspotcdn.com/dims4/default/babe98a/2147483647/strip/true/crop/599x399+0+0/resize/840x560!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fc8%2F55%2F50b320f03f09f5e2757bf1dc1c5c%2Fla-xpm-photo-2012-jul-12-la-sci-sn-banana-genome-evolution-20120712',
            'title': 'Sallys Gone Bananas!',
            'address': '123 Washington Street',
            'rating': '4.9',
            'num_ratings': '222'
        },
        {
            'business_id': '222yes',
            'image_url': 'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/coconut-nutrition-correct-1296x728-feature.jpg?w=1155&h=1528',
            'title': 'Sallys Loco Cocos!',
            'address': '5 1st Street',
            'rating': '2.4',
            'num_ratings': '5892'
        },
        {
            'business_id': 'theEyeDee',
            'image_url': 'https://images.indianexpress.com/2020/02/strawberry-1200.jpg',
            'title': 'Straw Hat Sally!',
            'address': '22 Gomugomu Street',
            'rating': '5.0',
            'num_ratings': '14'
        },
        {
            'business_id': 'legend27',
            'image_url': 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/10/pineapple-fruit-1296x728-header-1296x728.jpg?w=1155&h=1528',
            'title': 'Porcupine Sally!',
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
    businesses = {}
    test = {
      'trending': [
        {
          'title': 'Sallys Salooon',
          'imageurl': 'https://garboasalon.com/img/HP_SLIDER1_garbo_aveda_hair_salon_spa_best_austin_hair_color_nails_top_hair_stylist_men_hair_cut_austin_78757_atx_78741_hair_salon_near_me_austin_hairdress.jpg',
          'services': 'Cut ur hair, wash',
          'rating': '1.1',
          'numratings': '10'
        },
        {
          'title': 'Sallys Nails',
          'services': 'cut nails, gel',
          'imageurl': 'https://img.grouponcdn.com/deal/4CXB3CXmmbxHiNCBfqnMhsoPkv3G/4C-901x596/v1/c700x420.jpg',
          'rating': '1.5',
          'numratings': '13'
        },
        {
          'title': 'Sallys Eyes',
          'services': 'makeup, eyes',
          'imageurl': 'https://i.pinimg.com/originals/cc/34/f2/cc34f2389c1d1fe9355fd774b369df93.jpg',
          'rating': '4.1',
          'numratings': '222'
        }
      ],
      'recommendations': [
        {
          'title': 'Sallys Salooon',
          'imageurl': 'https://garboasalon.com/img/HP_SLIDER1_garbo_aveda_hair_salon_spa_best_austin_hair_color_nails_top_hair_stylist_men_hair_cut_austin_78757_atx_78741_hair_salon_near_me_austin_hairdress.jpg',
          'services': 'Cut ur hair, wash',
          'rating': '1.1',
          'numratings': '10'
        },
        {
          'title': 'Sallys Nails',
          'services': 'cut nails, gel',
          'imageurl': 'https://img.grouponcdn.com/deal/4CXB3CXmmbxHiNCBfqnMhsoPkv3G/4C-901x596/v1/c700x420.jpg',
          'rating': '1.5',
          'numratings': '13'
        },
        {
          'title': 'Sallys Eyes',
          'services': 'makeup, eyes',
          'imageurl': 'https://i.pinimg.com/originals/cc/34/f2/cc34f2389c1d1fe9355fd774b369df93.jpg',
          'rating': '4.1',
          'numratings': '222'
        },
        {
          'title': 'Sallys Salon',
          'services': 'haircuts',
          'imageurl': 'https://diana-cdn.naturallycurly.com/Articles/BP_NY-Salons-.jpg',
          'rating': '2.1',
          'numratings': '123'
        }
      ],
      'hot': [
        {
          'title': 'Sallys Salooon',
          'imageurl': 'https://garboasalon.com/img/HP_SLIDER1_garbo_aveda_hair_salon_spa_best_austin_hair_color_nails_top_hair_stylist_men_hair_cut_austin_78757_atx_78741_hair_salon_near_me_austin_hairdress.jpg',
          'services': 'Cut ur hair, wash',
          'rating': '1.1',
          'numratings': '10'
        },
        {
          'title': 'Sallys Nails',
          'services': 'cut nails, gel',
          'imageurl': 'https://img.grouponcdn.com/deal/4CXB3CXmmbxHiNCBfqnMhsoPkv3G/4C-901x596/v1/c700x420.jpg',
          'rating': '1.5',
          'numratings': '13'
        },
        {
          'title': 'Sallys Eyes',
          'services': 'makeup, eyes',
          'imageurl': 'https://i.pinimg.com/originals/cc/34/f2/cc34f2389c1d1fe9355fd774b369df93.jpg',
          'rating': '4.1',
          'numratings': '222'
        },
        {
          'title': 'Sallys Salon',
          'services': 'haircuts',
          'imageurl': 'https://diana-cdn.naturallycurly.com/Articles/BP_NY-Salons-.jpg',
          'rating': '2.1',
          'numratings': '123'
        }
      ]
    }

    businesses = test
    return json.dumps(businesses), 200


# CREDITCARD
def getCards():
    cards = []
    return json.dumps(cards), 200

def addCard():
    return {'success': 'card successfully created'}, 200

def removeCard():
    return {'success': 'card successfully removed'}, 200
