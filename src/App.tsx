import React from 'react';
import { ReactComponent as Logo } from "./logo.svg";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo style={{ height: 200 }} />
        <h1>Aqib's personal website</h1>
      </header>
    </div>
  );
}

export default App;
