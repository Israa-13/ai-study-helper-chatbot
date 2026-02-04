import React, { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import ChatInput from './components/ChatInput';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (userMessage) => {
  // Add user message
  const newMessages = [...messages, { content: userMessage, isUser: true }];
  setMessages(newMessages);
  setIsLoading(true);

  try {
    // Send entire conversation history to Flask
    const response = await fetch('http://localhost:5000/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ messages: newMessages }),
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
      <ChatWindow messages={messages} isLoading={isLoading} />
      <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
    </div>
  );
}

export default App;