
import { MessageCircle, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ChatButtonProps {
  isOpen: boolean;
  onClick: () => void;
  hasUnread?: boolean;
}

export const ChatButton = ({ isOpen, onClick, hasUnread = false }: ChatButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "fixed w-14 h-14 rounded-full shadow-lg transition-all duration-300 z-50",
        "flex items-center justify-center",
        "bg-primary text-primary-foreground hover:bg-primary/90",
        "hover:scale-110 active:scale-95",
        // Desktop positioning
        "bottom-6 right-6",
        // Mobile positioning - slightly different to avoid conflicts
        "max-sm:bottom-4 max-sm:right-4",
        isOpen && "rotate-90"
      )}
    >
      {isOpen ? (
        <X size={24} />
      ) : (
        <div className="relative">
          <MessageCircle size={24} />
          {hasUnread && (
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
          )}
        </div>
      )}
    </button>
  );
};
