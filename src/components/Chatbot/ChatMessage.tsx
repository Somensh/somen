
import { Bot, User } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ChatMessageType {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  isTyping?: boolean;
}

interface ChatMessageProps {
  message: ChatMessageType;
}

export const ChatMessage = ({ message }: ChatMessageProps) => {
  const isBot = message.type === 'bot';
  
  return (
    <div className={cn(
      "flex gap-3 p-4 animate-fade-in",
      isBot ? "justify-start" : "justify-end"
    )}>
      {isBot && (
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
          <Bot size={16} className="text-primary" />
        </div>
      )}
      
      <div className={cn(
        "max-w-[80%] rounded-lg px-4 py-2",
        isBot 
          ? "bg-muted text-foreground" 
          : "bg-primary text-primary-foreground ml-auto"
      )}>
        {message.isTyping ? (
          <div className="flex items-center gap-1">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
              <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
              <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          </div>
        ) : (
          <p className="text-sm whitespace-pre-wrap">{message.content}</p>
        )}
      </div>
      
      {!isBot && (
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
          <User size={16} className="text-primary" />
        </div>
      )}
    </div>
  );
};
