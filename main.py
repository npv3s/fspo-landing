import sys
from os.path import dirname, realpath
from bottle import Bottle, run, template, static_file

root_dir = dirname(realpath(__file__))
app = Bottle()


@app.route('/')
def index():
    return template(root_dir+"/landing.html")


if len(sys.argv) > 1:
    @app.route('/img/<name>')
    def img(name):
        return static_file(name, root=root_dir+'/img')

    @app.route('/static/<name>')
    def static(name):
        return static_file(name, root=root_dir+'/static')

    if sys.argv[1] == 'debug':
        run(app, host='localhost', port=8080, debug=True)
