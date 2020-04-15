import sys
from os.path import dirname, realpath
from bottle import Bottle, run, template

root_dir = dirname(realpath(__file__))
app = Bottle()


@app.route('/')
def index():
    return template(root_dir+"/landing.html")


if len(sys.argv) > 1:
    if sys.argv[1] == 'debug':
        run(app, host='0.0.0.0', port=8080, debug=True)
