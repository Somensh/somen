import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === 'dark';

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={cn(
        "fixed w-14 h-14 rounded-full shadow-lg transition-all duration-300 z-50",
        "bg-background/80 backdrop-blur-sm border-border hover:bg-muted",
        "hover:scale-110 active:scale-95",
        // Desktop positioning
        "bottom-6 left-6",
        // Mobile positioning
        "max-sm:bottom-4 max-sm:left-4"
      )}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      {isDark ? (
        <Sun size={24} className="text-foreground" />
      ) : (
        <Moon size={24} className="text-foreground" />
      )}
    </Button>
  );
};