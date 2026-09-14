import { config } from '../config';

export function Letter() {
  return (
    <section className="letter" aria-label="Letter">
      <p className="letter__opening reveal-on-scroll">{config.letterOpening}</p>

      {config.letter.map((paragraph, index) => (
        <p key={index} className="letter__paragraph reveal-on-scroll">
          {paragraph}
        </p>
      ))}

      <p className="letter__closing reveal-on-scroll">{config.letterClosing}</p>
    </section>
  );
}
