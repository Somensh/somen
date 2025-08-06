import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

interface TrailPoint {
  id: number;
  x: number;
  y: number;
  opacity: number;
}

const CursorTrail = () => {
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { theme } = useTheme();

  useEffect(() => {
    let id = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      const newPoint: TrailPoint = {
        id: id++,
        x: e.clientX,
        y: e.clientY,
        opacity: 1,
      };

      setTrail(prev => [...prev, newPoint].slice(-12)); // Keep only last 12 points
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Fade out trail points
    const fadeInterval = setInterval(() => {
      setTrail(prev => 
        prev
          .map(point => ({ ...point, opacity: point.opacity - 0.08 }))
          .filter(point => point.opacity > 0)
      );
    }, 50);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(fadeInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="absolute rounded-full transition-all duration-75 ease-out"
          style={{
            left: point.x - 4,
            top: point.y - 4,
            width: 8 - (index * 0.3),
            height: 8 - (index * 0.3),
            background: theme === 'dark' 
              ? '#22ff91' 
              : `linear-gradient(45deg, 
                  hsl(${280 + index * 20}, 70%, ${60 + index * 5}%), 
                  hsl(${200 + index * 15}, 80%, ${70 + index * 3}%))`,
            opacity: point.opacity * (1 - index * 0.05),
            transform: `scale(${1 - index * 0.05})`,
            boxShadow: theme === 'dark' 
              ? `0 0 ${4 + index}px #22ff91` 
              : `0 0 ${3 + index}px rgba(139, 69, 219, 0.4)`,
          }}
        />
      ))}
    </div>
  );
};

export default CursorTrail;