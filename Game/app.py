import flask
from flask import Flask

app = Flask(__name__)


@app.route('/')
def main_menu():  # put application's code here
    return flask.render_template('Main Menu.html')

@app.route('/easy')
def easy():
    return flask.render_template('easy.html')

@app.route('/normal')
def normal():
    return flask.render_template('normal.html')

@app.route('/expert')
def expert():
    return flask.render_template('expert.html')


if __name__ == '__main__':
    app.run()
