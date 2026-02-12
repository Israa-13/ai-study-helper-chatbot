# AI Study Helper Chatbot

An intelligent chatbot built with React and Flask that helps students learn through the Socratic teaching method using Google's Gemini AI. The bot guides students to discover answers themselves rather than just providing solutions.

## ✨ Features

- 💬 **Conversational AI Interface** - Natural chat experience with conversation memory
- 🧠 **Socratic Teaching Method** - Guides learning through questions rather than direct answers
- 🎓 **Adaptive Difficulty Levels** - Adjust explanations for Elementary, Middle School, High School, or College level
- 📐 **LaTeX Math Rendering** - Beautiful mathematical equation display
- 📝 **Markdown Support** - Formatted responses with bold, lists, code blocks
- ⚡ **Real-time Typing Indicators** - Visual feedback while AI generates responses
- 💭 **Conversation Memory** - Remembers context throughout the entire chat session
- 🎨 **Modern UI** - Gradient design with smooth animations
- 🔒 **Secure API Key Management** - Backend proxy keeps credentials safe

## 🚀 Tech Stack

**Frontend:**
- React.js
- React Markdown with KaTeX
- CSS3 with modern gradients

**Backend:**
- Python Flask
- Google Generative AI (Gemini 2.5 Flash API)
- Flask-CORS
- python-dotenv

## 📂 Project Structure
```
react_chatbot/
├── backend/              # Flask API server
│   ├── app.py           # Main Flask application with Socratic prompting
│   ├── .env             # API keys (not tracked in Git)
│   ├── .gitignore       # Protects sensitive files
│   └── requirements.txt # Python dependencies
├── frontend/            # React application
│   ├── src/
│   │   ├── components/  # Reusable React components
│   │   │   ├── ChatWindow.js      # Message container
│   │   │   ├── ChatMessage.js     # Individual message with LaTeX
│   │   │   ├── ChatInput.js       # Input field and send button
│   │   │   └── TypingIndicator.js # Animated loading dots
│   │   ├── App.js       # Main app with difficulty selector
│   │   └── App.css      # Global styling
│   └── package.json     # Node dependencies
└── venv/                # Python virtual environment
```

## 🎯 How It Works

### Socratic Teaching Method

Unlike traditional chatbots that simply provide answers, this study helper:

- ✅ **Asks clarifying questions** - "What have you tried so far?"
- ✅ **Guides step-by-step** - Breaks down complex problems
- ✅ **Encourages thinking** - "What do you think the first step would be?"
- ✅ **Builds confidence** - Celebrates effort and progress
- ❌ **Never solves homework directly** - Focuses on understanding, not just answers

### Adaptive Difficulty

The AI adjusts its teaching style based on the selected level:

- 🎒 **Elementary School** - Simple vocabulary, relatable examples (toys, games, family)
- 📚 **Middle School** - Age-appropriate terms, connects to hobbies and interests  
- 🎓 **High School** - Academic vocabulary, real-world applications, critical thinking
- 🏛️ **College/University** - Advanced concepts, technical terminology, research-level depth

## 📋 Setup Instructions

### Prerequisites

- Python 3.8+
- Node.js 14+
- Google Gemini API key (free at https://aistudio.google.com/app/apikey)

### Backend Setup

1. **Clone the repository**
```bash
   git clone https://github.com/Israa-13/ai-study-helper-chatbot.git
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

## 🎮 Running the Application

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

## 💡 Usage Examples

### Example 1: Math Problem (High School Level)

**You:** "What's the answer to 3x + 7 = 22?"

**Bot:** "That's a great algebra problem! I can definitely help you think through it. First, what's your goal when you're trying to solve an equation like 3x + 7 = 22? What are you trying to find?"

*(Guides you through solving rather than just giving x = 5)*

---

### Example 2: Science Concept (Elementary Level)

**You:** *[Selects Elementary School level]* "What is photosynthesis?"

**Bot:** "Great question! Photosynthesis is how plants make their own food using sunlight! Think of plants like they have tiny solar panels in their leaves. What do you think plants might need besides sunlight to make food?"

---

### Example 3: Math Formula (College Level)

**You:** *[Selects College level]* "What's the quadratic formula?"

**Bot:** *[Displays beautifully rendered LaTeX equation]*

$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

*Followed by detailed explanation of derivation and applications*

## 🔐 Security

⚠️ **Important:** Never commit your `.env` file to Git!

- Your API key is sensitive and should remain private
- The `.gitignore` file is configured to prevent accidental uploads
- Always verify `.env` is not staged before pushing: `git status`

## 📊 API Usage (Free Tier)

**Gemini 2.5 Flash Free Tier:**
- 15 requests per minute
- 1,500 requests per day
- 1 million tokens per day

More than sufficient for personal study use!

## 🛠️ Technologies & Libraries

**Backend:**
- Flask 3.0.0
- flask-cors 4.0.0
- google-generativeai
- python-dotenv

**Frontend:**
- react
- react-markdown
- remark-math
- rehype-katex
- katex

## 📈 Version History

### v1.2 (Current)
- ✨ Added LaTeX math rendering for beautiful equations
- 🎓 Added difficulty level selector (Elementary/Middle/High/College)
- 🎨 Improved message formatting
- 🐛 Fixed scrollbar issues

### v1.1
- 🧠 Implemented Socratic teaching method
- 📚 Advanced prompt engineering for better educational guidance
- 💬 Subject-specific teaching approaches

### v1.0
- 🎉 Initial release
- 💬 Basic conversational chatbot
- 🔄 Conversation memory
- 📝 Markdown rendering
- ⚡ Typing indicators

## 🚧 Planned Features

- 📝 Quiz generation after explanations
- 📊 Progress tracking across sessions
- 🎤 Voice input support
- 💾 Save conversation history
- 🌍 Multi-language support

## 🤝 Contributing

This is a student project for an AI Engineering course. Feel free to fork and modify for your own learning!

## 📄 License

MIT License - Free to use for educational purposes

## 🙏 Acknowledgments

- Built as part of AI Engineering coursework
- Powered by Google's Gemini AI API
- Inspired by the Socratic teaching method
- React component architecture following modern best practices

---

**Course:** AI Engineering  
**Academic Year:** 2025-2026  
**Last Updated:** February 2026

⭐ **If you find this helpful, please star the repository!**