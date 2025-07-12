// App.js
import React from 'react';
import ThemeProvider from './ThemeProvider';
import ThemedBox from './ThemedBox';

function App() {
  return (
    <ThemeProvider>
      <ThemedBox />
    </ThemeProvider>
  );
}

export default App;
