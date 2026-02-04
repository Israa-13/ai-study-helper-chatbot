import React, { useRef, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import TypingIndicator from './TypingIndicator';
import './ChatWindow.css';

function ChatWindow({ messages, isLoading }) {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  return (
    <div className="chat-window">
      {messages.length === 0 ? (
        <div className="empty-state">
          <h2>Study & Homework Helper</h2>
          <p>Ask me anything about your studies!</p>
        </div>
      ) : (
        <>
          {messages.map((msg, index) => (
            <ChatMessage 
              key={index} 
              message={msg.content} 
              isUser={msg.isUser} 
            />
          ))}
          {isLoading && <TypingIndicator />}
        </>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default ChatWindow;