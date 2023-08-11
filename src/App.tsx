import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <div>
          <h1>wethear-app</h1>
      <div>
        <label>
            add location
            <input type="text" value="tehran"/>
        </label>
        <button>search</button>
      </div>
      <div>
        <h2>locations</h2>
      </div>
    </div>
  </div>
  );
}

export default App;
