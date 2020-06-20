from flask import Flask
app = Flask(__name__)

# import declared routes
import frontenddata

@app.route('/')
def hello():
    return "Hello World!"

if __name__ == '__main__':
    app.run()
