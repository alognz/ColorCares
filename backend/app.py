from flask import Flask, request, jsonify
import sqlite3

app = Flask(__name__)

def init_db():
    pass

init_db()

@app.route('/doctors', methods=['GET'])
def get_doctors():
    return jsonify([])

@app.route('/add_review', methods=['POST'])
def add_review():
    data = request.json
    return jsonify({"message": "Review added successfully!"})

@app.route('/doctor_reviews/<int:doctor_id>', methods=['GET'])
def get_reviews(doctor_id):
    return jsonify([])

if __name__ == '__main__':
    app.run(debug=True)