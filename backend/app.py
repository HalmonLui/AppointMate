# import app
from flask import Flask, render_template
from flask_cors import CORS

# import custom helpers
from maplib import generate_embed

app = Flask(__name__)
CORS(app)

# import declared routes
import frontenddata




@app.route('/')
def hello():
    location = "850 FOLSOM ST, San Francisco, CA 94107"
    addresslist = {'a' : generate_embed(location)}
    return render_template('map.html', addresslist=addresslist )



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