// ThemedBox.js
import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function ThemedBox() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const styles = {
    backgroundColor: theme === 'light' ? '#f0f0f0' : '#222',
    color: theme === 'light' ? '#000' : '#fff',
    padding: '2rem',
    margin: '1rem auto',
    width: '300px',
    textAlign: 'center',
  };

  return (
    <div style={styles}>
      <h3>{theme.toUpperCase()} MODE</h3>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default ThemedBox;
