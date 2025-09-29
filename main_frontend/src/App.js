import React, { useState, useEffect } from 'react';
import './App.css';
import OurSolutionSkilltest from './components/OurSolutionSkilltest/OurSolutionSkilltest';

// PUBLIC_INTERFACE
function App() {
  /** Root app controlling theme toggle and rendering the "Our solution: skilltest" screen. */
  const [theme, setTheme] = useState('light');

  // Apply theme to document element for CSS variables in App.css
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="App">
      <header className="App-header" style={{ minHeight: 'auto' }}>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </header>
      <main>
        <OurSolutionSkilltest />
      </main>
    </div>
  );
}

export default App;
