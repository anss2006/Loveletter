import { useMemo } from 'react';

interface Star {
  id: number;
  top: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
}

function generateStars(count: number): Star[] {
  return Array.from({ length: count }, (_, id) => ({
    id,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: 1 + Math.random() * 1.8,
    delay: Math.random() * 6,
    duration: 4 + Math.random() * 5,
  }));
}

/** Fixed, decorative starfield. Purely CSS-animated; safe to render once and forget. */
export function StarField() {
  const stars = useMemo(() => generateStars(70), []);

  return (
    <div className="starfield" aria-hidden="true">
      {stars.map((star) => (
        <span
          key={star.id}
          className="star"
          style={
            {
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
