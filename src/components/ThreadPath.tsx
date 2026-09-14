import { config } from '../config';

/**
 * A single thread running the full height of the page, connecting a point
 * near the top (you) to a point near the bottom (her). Its stroke draws in
 * as the page scrolls, using CSS scroll-driven animation only — see
 * `.thread-path` in global.css for the actual animation + fallback.
 *
 * pathLength="1" is a deliberate trick: it lets the CSS treat the whole
 * path as a 0–1 range regardless of its real on-screen length, so the
 * draw-in animation stays correct no matter how long the letter ends up
 * being (i.e. no JS measurement of the path required).
 */
export function ThreadPath() {
  return (
    <div className="thread-layer" aria-hidden="true">
      <svg
        className="thread-svg"
        viewBox="0 0 100 1000"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="thread-path"
          pathLength={1}
          d="M50,20
             C 20,120 80,220 50,320
             C 20,420 80,520 50,620
             C 20,720 80,820 50,920
             L 50,980"
          fill="none"
        />
        <circle className="thread-point thread-point--start" cx="50" cy="20" r="7" />
        <circle className="thread-point thread-point--end" cx="50" cy="980" r="7" />
      </svg>
      <span className="thread-label thread-label--start">{config.yourName}</span>
      <span className="thread-label thread-label--end">{config.herName}</span>
    </div>
  );
}
