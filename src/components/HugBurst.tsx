import { useRef, useState, useCallback } from 'react';

interface Heart {
  id: number;
  angle: number;
  distance: number;
  drift: number;
  size: number;
  duration: number;
}

const HEART_COUNT = 16;
const HEART_LIFETIME_MS = 1500;

function generateHearts(): Heart[] {
  return Array.from({ length: HEART_COUNT }, (_, id) => {
    const angle = (360 / HEART_COUNT) * id + (Math.random() * 20 - 10);
    return {
      id,
      angle,
      distance: 70 + Math.random() * 60,
      drift: Math.random() * 40 - 20,
      size: 10 + Math.random() * 10,
      duration: 1.1 + Math.random() * 0.6,
    };
  });
}

export function HugBurst() {
  const [hearts, setHearts] = useState<Heart[]>([]);
  const burstId = useRef(0);

  const triggerBurst = useCallback(() => {
    const id = ++burstId.current;
    setHearts(generateHearts());
    window.setTimeout(() => {
      // Only clear if this is still the most recent burst.
      if (burstId.current === id) setHearts([]);
    }, HEART_LIFETIME_MS);
  }, []);

  return (
    <div className="hug-burst">
      <button type="button" className="hug-burst__button" onClick={triggerBurst}>
        press for a hug
      </button>

      <div className="hug-burst__field" aria-hidden="true">
        {hearts.map((heart) => {
          const radians = (heart.angle * Math.PI) / 180;
          const tx = Math.cos(radians) * heart.distance + heart.drift;
          const ty = Math.sin(radians) * heart.distance;

          return (
            <span
              key={`${burstId.current}-${heart.id}`}
              className="hug-burst__heart"
              style={
                {
                  '--tx': `${tx}px`,
                  '--ty': `${ty}px`,
                  width: `${heart.size}px`,
                  height: `${heart.size}px`,
                  animationDuration: `${heart.duration}s`,
                } as React.CSSProperties
              }
            />
          );
        })}
      </div>
    </div>
  );
}
