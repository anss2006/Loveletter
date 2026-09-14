import { useLiveStats } from '../hooks/useLiveStats';

export function LiveStats() {
  const { daysTogether, distanceKm } = useLiveStats();

  return (
    <div className="live-stats" role="group" aria-label="Days together and distance apart">
      <div className="live-stats__item">
        <span className="live-stats__number">{daysTogether.toLocaleString()}</span>
        <span className="live-stats__label">days together</span>
      </div>
      <span className="live-stats__divider">·</span>
      <div className="live-stats__item">
        <span className="live-stats__number">{Math.round(distanceKm).toLocaleString()}</span>
        <span className="live-stats__label">km apart</span>
      </div>
    </div>
  );
}
