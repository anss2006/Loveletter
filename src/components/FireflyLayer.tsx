import { useEffect, useMemo, useRef, useState } from 'react';

interface Firefly {
  id: number;
  top: number;
  left: number;
  delay: number;
  duration: number;
}

interface Spark {
  id: number;
  x: number;
  y: number;
}

function generateFireflies(count: number): Firefly[] {
  return Array.from({ length: count }, (_, id) => ({
    id,
    top: 10 + Math.random() * 80,
    left: 5 + Math.random() * 90,
    delay: Math.random() * 8,
    duration: 10 + Math.random() * 8,
  }));
}

const SPARK_LIFETIME_MS = 900;

/**
 * Ambient fireflies drift on their own throughout the page. On top of that,
 * a tap anywhere spawns one extra spark at the tap point — the mobile-
 * friendly stand-in for "hover reveals a firefly," which isn't a gesture
 * that exists on a touchscreen.
 *
 * The tap listener is attached to `window` rather than a wrapping element,
 * so it never has to fight z-index/pointer-events with real buttons —
 * every tap is heard, and every button still gets its own click normally.
 */
export function FireflyLayer() {
  const fireflies = useMemo(() => generateFireflies(10), []);
  const [sparks, setSparks] = useState<Spark[]>([]);
  const nextSparkId = useRef(0);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      const id = nextSparkId.current++;
      setSparks((current) => [...current, { id, x: event.clientX, y: event.clientY }]);
      window.setTimeout(() => {
        setSparks((current) => current.filter((spark) => spark.id !== id));
      }, SPARK_LIFETIME_MS);
    }

    window.addEventListener('pointerdown', handlePointerDown);
    return () => window.removeEventListener('pointerdown', handlePointerDown);
  }, []);

  return (
    <>
      <div className="firefly-layer__ambient" aria-hidden="true">
        {fireflies.map((fly) => (
          <span
            key={fly.id}
            className="firefly"
            style={
              {
                top: `${fly.top}%`,
                left: `${fly.left}%`,
                animationDelay: `${fly.delay}s`,
                animationDuration: `${fly.duration}s`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      <div className="firefly-layer__sparks" aria-hidden="true">
        {sparks.map((spark) => (
          <span
            key={spark.id}
            className="firefly-spark"
            style={{ top: spark.y, left: spark.x } as React.CSSProperties}
          />
        ))}
      </div>
    </>
  );
}
