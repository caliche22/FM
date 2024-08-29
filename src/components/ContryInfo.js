import React from 'react';
import MapComponent from './mapComponent';
import '../styles/CountryInfo.css'

const CountryInfo = ({ countryData }) => {
  const location = countryData.latlng ? { lat: countryData.latlng[0], lng: countryData.latlng[1] } : null;

  return (
    <div className="country-info">
      <h2>{countryData.name.common}</h2>
      <p><strong>Official Name:</strong> {countryData.name.official}</p>
      <p><strong>Currency:</strong> {countryData.currencies && Object.values(countryData.currencies)[0].name}</p>
      <p><strong>Region:</strong> {countryData.region}</p>
      <p><strong>Capital:</strong> {countryData.capital && countryData.capital[0]}</p>
      <p><strong>Area:</strong> {countryData.area} km²</p>
      {location && (
        <div>
          <h3>Google Maps</h3>
          <MapComponent location={location} />
        </div>
      )}
    </div>
  );
};

export default CountryInfo;
