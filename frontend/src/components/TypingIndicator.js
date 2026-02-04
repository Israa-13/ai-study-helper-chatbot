import React from 'react';
import './TypingIndicator.css';

function TypingIndicator() {
  return (
    <div className="message bot-message typing-indicator">
      <div className="typing-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default TypingIndicator;