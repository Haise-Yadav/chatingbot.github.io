import json
from flask import Flask, request, jsonify
from pymongo import MongoClient
import nltk
from nltk.stem import WordNetLemmatizer
from tensorflow.keras.models import load_model
import pickle
import numpy as np
from flask_cors import CORS
import random  # Add this import

app = Flask(__name__)
CORS(app)

client = MongoClient("mongodb://localhost:27017")
db = client["restorant"]
collection = db["food_items"]

lemmatizer = WordNetLemmatizer()

with open('intents.json') as file:
    intents = json.load(file)

words = pickle.load(open('words.pkl', 'rb'))
classes = pickle.load(open('classes.pkl', 'rb'))
model = load_model('chatBot_model.model')

def clean_up_sentence(sentence):
    sentence_words = nltk.word_tokenize(sentence)
    sentence_words = [lemmatizer.lemmatize(word) for word in sentence_words]
    return sentence_words

def bag_of_words(sentence):
    sentence_words = clean_up_sentence(sentence)
    bag = [0] * len(words)
    for w in sentence_words:
        for i, word in enumerate(words):
            if word == w:
                bag[i] = 1
    return np.array(bag)

def predict_class(sentence):
    bow = bag_of_words(sentence)
    res = model.predict(np.array([bow]))[0]
    ERROR_THRESHOLD = 0.25
    result = [[i, r] for i, r in enumerate(res) if r > ERROR_THRESHOLD]

    result.sort(key=lambda x: x[1], reverse=True)
    return_list = []
    for r in result:
        return_list.append({'intent': classes[r[0]], 'probability': str(r[1])})

    return return_list

def get_response(intents_list, intents_json):
    tag = intents_list[0]['intent']
    list_of_intents = intents_json['intents']
    for i in list_of_intents:
        if i['tags'] == tag:
            if tag == 'menu_inquiry':
                menu_items = []
                for item in collection.find():
                    menu_items.append(f"{item['name']}: ${item['price']:.2f}")
                result = "Here is the menu:\n" + "\n".join(menu_items)
            else:
                result = random.choice(i['responses'])
            break
    return result

@app.route('/api/chat', methods=['POST'])
def chat():
    try:
        data = request.get_json()
        user_message = data.get('message', '')

        if user_message:
            intents_list = predict_class(user_message)
            bot_response = get_response(intents_list, intents)
            return jsonify({'response': bot_response})
        else:
            return jsonify({'response': "Bot: Please provide a message."})
    except Exception as e:
        return jsonify({'response': f"Bot: An error occurred - {str(e)}"})

if __name__ == '__main__':
    app.run(debug=True)
