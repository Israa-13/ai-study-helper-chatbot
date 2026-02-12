import React, { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import ChatInput from './components/ChatInput';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [difficultyLevel, setDifficultyLevel] = useState('high_school');

  const handleSendMessage = async (userMessage) => {
    // Add user message
    const newMessages = [...messages, { content: userMessage, isUser: true }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      // Send entire conversation history AND difficulty level to Flask
      const response = await fetch('http://localhost:5000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          messages: newMessages,
          difficulty_level: difficultyLevel 
        }),
      });

      const data = await response.json();

      if (data.success) {
        setMessages([...newMessages, { content: data.message, isUser: false }]);
      } else {
        setMessages([...newMessages, { content: 'Error: ' + data.error, isUser: false }]);
      }
    } catch (error) {
      setMessages([...newMessages, { content: 'Error connecting to server', isUser: false }]);
    }

    setIsLoading(false);
  };

  return (
    <div className="App">
      <div className="app-header">
        <h1>AI Study Helper</h1>
        <div className="difficulty-selector">
          <label htmlFor="difficulty">Learning Level:</label>
          <select 
            id="difficulty"
            value={difficultyLevel} 
            onChange={(e) => setDifficultyLevel(e.target.value)}
            className="difficulty-dropdown"
          >
            <option value="elementary">🎒 Elementary School</option>
            <option value="middle_school">📚 Middle School</option>
            <option value="high_school">🎓 High School</option>
            <option value="college">🏛️ College/University</option>
          </select>
        </div>
      </div>
      <ChatWindow messages={messages} isLoading={isLoading} />
      <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
    </div>
  );
}

export default App;