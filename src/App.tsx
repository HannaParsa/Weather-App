import React, {useState} from 'react';
import './App.css';

function App() {
  const [locationSearch, setLocationSearch] = useState('');
  const [locations, setLocations] = useState(['Mashhad', 'Shiraz', 'Tehran']);
  const disableSearch = locationSearch.trim() === '';
  const addLocation = () => {
    setLocations([locationSearch, ...locations]);
    setLocationSearch('');
};

  return (
    <div className="container">
        <div>
          <h1>wethear-app</h1>
      <div>
        <label>
            add location
            <input type="text" value={locationSearch} onChange = {e => setLocationSearch(e.target.value)}/>
        </label>
        <button onClick={() => setLocations([locationSearch, ...locations])}>Search</button>
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
          {locations.map((location, index) =>
          <tr key={index}><td>{location}</td></tr>
          )}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  );
}

export default App;
