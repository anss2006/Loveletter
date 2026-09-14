import { useTheme } from './hooks/useTheme';
import { ThemeToggle } from './components/ThemeToggle';
import { StarField } from './components/StarField';
import { ThreadPath } from './components/ThreadPath';
import { LiveStats } from './components/LiveStats';
import { Letter } from './components/Letter';
import { FireflyLayer } from './components/FireflyLayer';
import { HugBurst } from './components/HugBurst';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="page">
      <StarField />
      <FireflyLayer />

      <ThemeToggle theme={theme} onToggle={toggleTheme} />

      <main className="content">
        <ThreadPath />

        <header className="hero">
          <p className="hero__eyebrow">a letter, across the distance</p>
          <LiveStats />
          <p className="hero__cue">scroll down</p>
        </header>

        <Letter />

        <footer className="closing">
          <HugBurst />
        </footer>
      </main>
    </div>
  );
}
