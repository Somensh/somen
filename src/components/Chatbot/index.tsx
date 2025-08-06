
import { useState } from 'react';
import { ChatButton } from './ChatButton';
import { ChatWidget } from './ChatWidget';

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ChatButton 
        isOpen={isOpen} 
        onClick={() => setIsOpen(!isOpen)} 
      />
      <ChatWidget 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
      />
    </>
  );
};
