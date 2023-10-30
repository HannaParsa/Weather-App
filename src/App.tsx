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
    <div className="container">
        <div>
          <h1>wethear-app</h1>
      <div>
        <label>
            add location
            <input className="ml-1 mr-1" type="text" value={locationSearch} onChange = {e => setLocationSearch(e.target.value)}/>
        </label>
        {/* <button>search</button> */}
        <button className="btn btn-primary" onClick={() => setLocations([locationSearch, ...locations])}>Search</button>
      </div>
      <div>
        <h2>locations</h2>
        <table className="table table-hover">
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
