# import app
from flask import Flask, render_template, make_response, send_file
from flask_cors import CORS

# import custom helpers
from maplib import generate_embed
from callib import generate_ics

app = Flask(__name__)
CORS(app)

# import declared routes
import frontenddata


@app.route('/map')
def map():
    location = '850 FOLSOM ST, San Francisco, CA 94107'
    addresslist = {'a' : generate_embed(location)}
    return render_template('map.html', addresslist=addresslist)

@app.route('/cal')
def cal():
    appoint = {
        'stylist': 'Bob Nguyen',
        'salon': 'Salon Bobby',
        'event': 'Men\'s Haircut',
        'location':'850 FOLSOM ST, San Francisco, CA 94107',
        'starttime':'2020-06-23 08:00:00',
        'endtime':'2020-06-23 08:45:00',
    }
    return render_template('cal.html', appoint=appoint)

# def loop_matcher(delay):
#     while(True):
#         print('Matcher Automatically Run')
#         handle_matcher()  
#         #do expired status update here
#         time.sleep(delay)


# Run Server
if __name__ == "__main__":

   #matcher_delay = 3600 # 1 hour in seconds
   #p = Process(target=loop_matcher, args=(matcher_delay,))
   #p.start()

   app.run(host = '0.0.0.0', debug=True, use_reloader=False)
   #p.join()