import React, {useState} from 'react';
import './App.css';

function App() {
  const [locationSearch, setLocationSearch] = useState('');
  const [locations, setLocations] = useState<string []>([]);
  const disableSearch = locationSearch.trim() === '';
  const addLocation = () => {
    setLocations([locationSearch, ...locations]);
    setLocationSearch('');
};

  return (
    <div className="App">
        <div>
          <h1>wethear-app</h1>
      <div>
        <label>
            add location
            <input type="text" value={locationSearch} onChange = {e => setLocationSearch(e.target.value)}/>
        </label>
        {/* <button>search</button> */}
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
            {/* <tr>
             <td>Mashhad</td>
             </tr>
             <tr>
              <td>Shiraz</td>
            </tr> */}
            {locations.map((location, index) => <tr key = {index}><td>{location}</td></tr>)}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  );
}

export default App;
