import React from 'react';
import ReactMarkdown from 'react-markdown';
import './ChatMessage.css';

function ChatMessage({ message, isUser }) {
  return (
    <div className={`message ${isUser ? 'user-message' : 'bot-message'}`}>
      <div className="message-content">
        {isUser ? (
          message
        ) : (
          <ReactMarkdown>{message}</ReactMarkdown>
        )}
      </div>
    </div>
  );
}

export default ChatMessage;