
import { useState, useCallback } from 'react';
import { ChatMessageType } from '@/components/Chatbot/ChatMessage';
import { getChatResponse } from '@/utils/chatResponses';

export const useChatbot = () => {
  const [messages, setMessages] = useState<ChatMessageType[]>([
    {
      id: '1',
      type: 'bot',
      content: "Hi! I'm Somen's AI assistant. I can help you learn about his experience, skills, and projects. What would you like to know?",
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = useCallback(async (content: string) => {
    // Add user message
    const userMessage: ChatMessageType = {
      id: Date.now().toString(),
      type: 'user',
      content,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate typing delay
    await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 1000));

    // Get bot response
    const botResponse = getChatResponse(content);
    const botMessage: ChatMessageType = {
      id: (Date.now() + 1).toString(),
      type: 'bot',
      content: botResponse,
      timestamp: new Date()
    };

    setIsTyping(false);
    setMessages(prev => [...prev, botMessage]);
  }, []);

  return {
    messages,
    sendMessage,
    isTyping
  };
};
