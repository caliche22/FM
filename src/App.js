import React, { useState } from 'react';
import { fetchCountryData } from './services/contryservice';
import './App.css';
import CountryForm from './components/contryform'
import CountryInfo from './components/ContryInfo';
const App = () => {
  const [countryData, setCountryData] = useState(null);
  const [error, setError] = useState(null);

  const handleFetchCountryData = async (countryName) => {
    try {
      const data = await fetchCountryData(countryName);
      setCountryData(data);
      setError(null);
    } catch (error) {
      setCountryData(null);
      setError('Error fetching country data');
    }
  };

  return (
    <div className="App">
      <h1>Country Information</h1>
      <CountryForm onSubmit={handleFetchCountryData} />
      {error && <p className="error">{error}</p>}
      {countryData && <CountryInfo countryData={countryData} />}
    </div>
  );
};

export default App;
