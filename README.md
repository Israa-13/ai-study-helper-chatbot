# AI Study Helper Chatbot

An intelligent chatbot built with React and Flask that helps students with their homework and study questions using Google's Gemini AI.

## Features

- 💬 Conversational AI interface
- 🧠 Powered by Google Gemini API (free tier)
- 📝 Markdown rendering for formatted responses
- ⚡ Real-time typing indicators
- 💭 Conversation memory - remembers context throughout the chat
- 🎨 Modern, responsive UI with gradient design

## Tech Stack

**Frontend:**
- React.js
- React Markdown
- CSS3

**Backend:**
- Python Flask
- Google Generative AI (Gemini API)
- Flask-CORS

## Project Structure
```
react_chatbot/
├── backend/              # Flask API server
│   ├── app.py           # Main Flask application
│   ├── .env             # API keys (not tracked in Git)
│   └── requirements.txt # Python dependencies
├── frontend/            # React application
│   ├── src/
│   │   ├── components/  # Reusable React components
│   │   │   ├── ChatWindow.js
│   │   │   ├── ChatMessage.js
│   │   │   ├── ChatInput.js
│   │   │   └── TypingIndicator.js
│   │   └── App.js       # Main app component
│   └── package.json     # Node dependencies
└── venv/                # Python virtual environment
```

## Setup Instructions

### Prerequisites

- Python 3.8+
- Node.js 14+
- Google Gemini API key (free at https://aistudio.google.com/app/apikey)

### Backend Setup

1. **Clone the repository**
```bash
   git clone https://github.com/YOUR_USERNAME/ai-study-helper-chatbot.git
   cd ai-study-helper-chatbot
```

2. **Create and activate virtual environment**
   
   **Windows PowerShell:**
```powershell
   python -m venv venv
   .\venv\Scripts\Activate
```
   
   **Mac/Linux:**
```bash
   python3 -m venv venv
   source venv/bin/activate
```

3. **Install Python dependencies**
```bash
   cd backend
   pip install -r requirements.txt
```

4. **Set up environment variables**
   
   Create a `.env` file in the `backend/` folder:
```
   GEMINI_API_KEY=your_api_key_here
```
   
   Get your free API key from: https://aistudio.google.com/app/apikey

### Frontend Setup

1. **Install Node dependencies**
```bash
   cd ../frontend
   npm install
```

## Running the Application

You need to run both backend and frontend servers simultaneously.

### Terminal 1 - Start Backend
```powershell
# Windows
cd react_chatbot
.\venv\Scripts\Activate
cd backend
python app.py
```
```bash
# Mac/Linux
cd react_chatbot
source venv/bin/activate
cd backend
python app.py
```

The Flask server will start on `http://localhost:5000`

### Terminal 2 - Start Frontend
```bash
cd react_chatbot/frontend
npm start
```

The React app will automatically open in your browser at `http://localhost:3000`

## Usage

1. Open the app in your browser (should open automatically)
2. Type your study question in the input field at the bottom
3. Press "Send" or hit Enter
4. The AI will respond with helpful information
5. Continue the conversation - the bot remembers previous messages!

## Example Conversations

**User:** "What is photosynthesis?"  
**Bot:** *Provides detailed explanation with formatted text, lists, and examples*

**User:** "Can you explain it simpler?"  
**Bot:** *Remembers the previous topic and provides a simplified explanation*

## Key Features Explained

### Conversation Memory
The chatbot maintains conversation context, allowing for natural follow-up questions without repeating information.

### Markdown Rendering
Responses support:
- **Bold text** for emphasis
- Bullet points and numbered lists
- Code blocks for technical content
- Formatted mathematical expressions

### Typing Indicator
Shows animated dots while the AI is generating a response, providing visual feedback.

## Security Note

⚠️ **Important:** Never commit your `.env` file to Git! 

Your API key is sensitive. The `.gitignore` file is configured to prevent accidental uploads, but always verify before pushing changes.

## Future Improvements

Planned enhancements:
- Advanced prompt engineering for better educational guidance
- Subject-specific tutoring modes
- Quiz generation feature
- Progress tracking

## Contributing

This is a student project. Feel free to fork and modify for your own learning!

## License

MIT License

## Acknowledgments

- Built as part of AI Engineering coursework
- Uses Google's Gemini AI API
- React component architecture inspired by modern web development best practices

---

**Course:** AI Engineering  
**Date:** February 2026