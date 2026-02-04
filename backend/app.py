from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()

app = Flask(__name__)
CORS(app)

# Configure Gemini
GEMINI_API_KEY = os.getenv('GEMINI_API_KEY')
genai.configure(api_key=GEMINI_API_KEY)
model = genai.GenerativeModel('gemini-2.5-flash')

@app.route('/chat', methods=['POST'])
def chat():
    try:
        data = request.get_json()
        messages = data.get('messages', [])
        
        # Convert to Gemini format
        chat_history = []
        for msg in messages[:-1]:  # All except the last message
            role = "user" if msg['isUser'] else "model"
            chat_history.append({
                "role": role,
                "parts": [msg['content']]
            })
        
        # Start chat with history
        chat = model.start_chat(history=chat_history)
        
        # Send the latest message
        latest_message = messages[-1]['content']
        response = chat.send_message(latest_message)
        
        return jsonify({
            'success': True,
            'message': response.text
        })
    
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)