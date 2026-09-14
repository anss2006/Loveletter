import { useEffect, useState } from 'react';
import { config } from '../config';
import { haversineDistanceKm } from '../utils/haversine';

const MS_PER_DAY = 1000 * 60 * 60 * 24;

function daysSince(startDateIso: string): number {
  const start = new Date(startDateIso).getTime();
  if (Number.isNaN(start)) return 0;
  return Math.max(0, Math.floor((Date.now() - start) / MS_PER_DAY));
}

function resolveDistanceKm(): number {
  if (typeof config.distanceKmOverride === 'number') {
    return config.distanceKmOverride;
  }
  return haversineDistanceKm(
    config.yourCity.lat,
    config.yourCity.lon,
    config.herCity.lat,
    config.herCity.lon
  );
}

export interface LiveStats {
  daysTogether: number;
  distanceKm: number;
}

/** Days-together ticks forward on its own; distance is fixed but computed once. */
export function useLiveStats(): LiveStats {
  const [daysTogether, setDaysTogether] = useState(() => daysSince(config.startDate));
  const [distanceKm] = useState(resolveDistanceKm);

  useEffect(() => {
    // Recheck hourly so the count stays correct across a midnight rollover
    // without hammering the page with a per-second interval.
    const id = window.setInterval(() => {
      setDaysTogether(daysSince(config.startDate));
    }, 1000 * 60 * 60);
    return () => window.clearInterval(id);
  }, []);

  return { daysTogether, distanceKm };
}
