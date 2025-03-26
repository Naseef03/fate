from flask import Flask, render_template, jsonify
import random

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/toss', methods=['GET'])
def toss_coin():
    result = random.choice(['heads', 'tails'])
    return jsonify({'result': result})
    
if __name__ == '__main__':
    app.run(debug=True)
