import React from 'react';
import MapComponent from './mapComponent';
import enviroment from '../enviroment/enviroment'; // Importa el archivo de entorno
import '../styles/CountryInfo.css'; // Asegúrate de que este archivo de estilos existe

const CountryInfo = ({ countryData }) => {
  const location = countryData.latlng ? { lat: countryData.latlng[0], lng: countryData.latlng[1] } : null;

  // Función para construir la URL del iframe con las coordenadas
  const getMapUrl = () => {
    if (!location) return '';
    const { lat, lng } = location;
    return `https://www.google.com/maps/embed/v1/place?q=${lat},${lng}&key=${enviroment.apikeygooglemaps}`;
  };

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
          <h3>Google Maps (API)</h3>
          <MapComponent location={location} />
        </div>
      )}

      {location && (
        <div>
          <h3>Google Maps (Iframe)</h3>
          <iframe
            src={getMapUrl()}
            title="Google Maps"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default CountryInfo;
