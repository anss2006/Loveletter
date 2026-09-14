/**
 * ─────────────────────────────────────────────────────────────
 *  EVERYTHING PERSONAL LIVES IN THIS ONE FILE.
 *  Replace the TODO values below — nothing else needs to change.
 * ─────────────────────────────────────────────────────────────
 */

export interface CityCoords {
  /** Just for your own reference — not shown anywhere on the page. */
  name: string;
  lat: number;
  lon: number;
}

export const config = {
  /** Names used in small labels around the page. */
  yourName: 'You', // TODO
  herName: 'Her', // TODO

  /** ISO date (YYYY-MM-DD) your "days together" count starts from. */
  startDate: '2022-01-01', // TODO

  /**
   * Distance apart. Two ways to fill this in — use whichever's easier:
   *
   * 1) Set `distanceKmOverride` to a plain number and ignore the cities.
   * 2) Leave `distanceKmOverride` as null and fill in both cities' lat/lon
   *    (search "[city name] latitude longitude") — the distance is
   *    calculated automatically.
   */
  distanceKmOverride: null as number | null, // TODO (or fill in cities below)
  yourCity: { name: 'Your City', lat: 0, lon: 0 } as CityCoords, // TODO
  herCity: { name: 'Her City', lat: 0, lon: 0 } as CityCoords, // TODO

  /**
   * The letter itself. One string per paragraph — as many or as few as
   * you want. Keep each paragraph reasonably short; they reveal one at
   * a time as she scrolls, so a very long paragraph reveals as one big
   * block instead of a gradual read.
   */
  letter: [
    'TODO — first paragraph goes here.',
    'TODO — second paragraph goes here.',
    'TODO — third paragraph goes here.',
    'TODO — as many more as you want.',
  ] as string[],

  /** Shown just above the letter's first paragraph. */
  letterOpening: 'To you,', // TODO if you want something else ("My love," etc.)

  /** Shown after the last paragraph, above the hug button. */
  letterClosing: 'Yours, always.', // TODO
};
