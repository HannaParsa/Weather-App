import React from 'react';
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
        <table>
          <thead>
            <tr>
             <th>Name:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
             <td>Mashhad</td>
             </tr>
             <tr>
               <td>Mazandaran</td>
             </tr>
               <td>Shiraz</td>
             <tr>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  );
}

export default App;
