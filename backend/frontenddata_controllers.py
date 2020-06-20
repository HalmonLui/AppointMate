# APPOINTMENTS
def getAppointments():
    appointments = {}
    return appointments, 200

def addAppointment():
    return {'success': 'appointment successfully created'}, 200


# LOYALTIES
def getLoyalties():
    loyalties = {}
    return loyalties, 200

def updateLoyalty():
    return {'success': 'loyalty successfully updated'}, 200


# SAVED
def getSaved():
    saved = {}
    return saved, 200

def addSaved():
    return {'success': 'saved item successfully created'}, 200

def removeSaved():
    return {'success', 'saved item successfully removed'}, 200


# BUSINESSES
def getBusinesses():
    businesses = {}
    return businesses, 200


# CREDITCARD
def getCards():
    cards = {}
    return cards, 200

def addCard():
    return {'success': 'card successfully created'}, 200

def removeCard():
    return {'success': 'card successfully removed'}, 200
