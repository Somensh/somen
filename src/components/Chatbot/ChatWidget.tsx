
import { useState, useRef, useEffect } from 'react';
import { Send, Download, Mail, ExternalLink, X } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChatMessage, ChatMessageType } from './ChatMessage';
import { useChatbot } from '@/hooks/useChatbot';
import { cn } from '@/lib/utils';

interface ChatWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ChatWidget = ({ isOpen, onClose }: ChatWidgetProps) => {
  const [input, setInput] = useState('');
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { messages, sendMessage, isTyping } = useChatbot();

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage(input.trim());
      setInput('');
    }
  };

  const quickActions = [
    { label: 'View Resume', icon: Download, action: () => {
      const link = document.createElement('a');
      link.href = '/resume.pdf';
      link.download = 'Somen_Sharma_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }},
    { label: 'Contact Me', icon: Mail, action: () => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    }},
    { label: 'View Projects', icon: ExternalLink, action: () => {
      const element = document.getElementById('projects');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    }},
  ];

  if (!isOpen) return null;

  return (
    <div className={cn(
      "fixed z-40 animate-scale-in bg-background border rounded-lg shadow-xl flex flex-col",
      // Desktop positioning
      "bottom-24 right-6 w-80 h-96",
      // Mobile positioning - full screen on small devices
      "sm:bottom-24 sm:right-6 sm:w-80 sm:h-96",
      // Mobile full-screen overlay
      "max-sm:inset-4 max-sm:w-auto max-sm:h-auto max-sm:rounded-xl"
    )}>
      {/* Header */}
      <div className="p-4 border-b bg-primary/5 rounded-t-lg sm:rounded-t-lg max-sm:rounded-t-xl flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-foreground">Chat with Somen</h3>
          <p className="text-sm text-muted-foreground">Ask me about my experience, skills, or projects!</p>
        </div>
        {/* Close button for mobile */}
        <button 
          onClick={onClose}
          className="sm:hidden p-2 hover:bg-muted rounded-full transition-colors"
          aria-label="Close chat"
        >
          <X size={20} />
        </button>
      </div>

      {/* Messages */}
      <ScrollArea ref={scrollAreaRef} className="flex-1 p-0">
        <div className="space-y-1">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          {isTyping && (
            <ChatMessage 
              message={{
                id: 'typing',
                type: 'bot',
                content: '',
                timestamp: new Date(),
                isTyping: true
              }} 
            />
          )}
        </div>
      </ScrollArea>

      {/* Quick Actions */}
      <div className="p-3 border-t bg-muted/20">
        <div className="flex flex-wrap gap-2 mb-3">
          {quickActions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              onClick={action.action}
              className="flex items-center gap-1 text-xs flex-1 sm:flex-none min-w-0"
            >
              <action.icon size={12} className="flex-shrink-0" />
              <span className="truncate">{action.label}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="p-3 border-t">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 text-sm"
          />
          <Button type="submit" size="sm" disabled={!input.trim()}>
            <Send size={14} />
          </Button>
        </form>
      </div>
    </div>
  );
};
