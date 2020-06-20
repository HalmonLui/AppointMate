from app import app
from flask import request
import frontenddata_controllers as controllers

@app.route('/test', methods=['GET', 'POST'])
def test():
    return 'it works!'


@app.route('/appointments',methods=['GET', 'POST'])
def appointmentsAPI():
    if request.method == 'GET':
        return controllers.getAppointments()
    elif request.method == 'POST':
        return controllers.addAppointment()
    else:
        return {'error': 'Not a valid endpoint'}, 400


@app.route('/loyalties',methods=['GET', 'PUT'])
def loyaltiesAPI():
    if request.method == 'GET':
        return controllers.getLoyalties()
    elif request.method == 'PUT':
        return controllers.updateLoyalty()
    else:
        return {'error': 'Not a valid endpoint'}, 400


@app.route('/saved',methods=['GET', 'POST', 'DELETE'])
def savedAPI():
    if request.method == 'GET':
        return controllers.getSaved()
    elif request.method == 'PUT':
        return controllers.addSaved()
    elif request.method == 'DELETE':
        return controllers.removeSaved()
    else:
        return {'error': 'Not a valid endpoint'}, 400


@app.route('/businesses',methods=['GET'])
def businessesAPI():
    if request.method == 'GET':
        return controllers.getBusinesses()
    else:
        return {'error': 'Not a valid endpoint'}, 400


@app.route('/creditcard',methods=['GET', 'POST', 'DELETE'])
def creditcardAPI():
    if request.method == 'GET':
        return controllers.getCards()
    elif request.method == 'PUT':
        return controllers.addCard()
    elif request.method == 'DELETE':
        return controllers.removeCard()
    else:
        return {'error': 'Not a valid endpoint'}, 400
