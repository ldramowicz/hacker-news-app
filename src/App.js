import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [isOn, setIsOn] = useState(false);
  useEffect(() => {
    let interval;
    if (isOn) {
      interval = setInterval(
          () => setTimer(timer => timer + 1),
          1000,
      );
    }
    return () => clearInterval(interval);
  }, [isOn]);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
