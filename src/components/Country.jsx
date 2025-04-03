import React from 'react';

const Country = ({ country, weather }) => {
  return (
    <div className="container">
      <div className="output-container">
        <div className="box left-column">
          <h2>{country.name}</h2>
          <img src={country.flag} alt="flag" width="30%" />
          <p><strong>Subregion:</strong> {country.subregion}</p>
          <p><strong>Area:</strong> {country.area.toLocaleString('en', { useGrouping: true })} km²</p>
          <p><strong>Population:</strong> {country.population.toLocaleString('en', { useGrouping: true })}</p>
          <p><strong>Capital:</strong> {country.capital}</p>
          <p><strong>Languages:</strong> {country.languages}</p>
          <p><strong>Currency:</strong> {country.currency} ({country.currencySymbol})</p>
        </div>

        {weather && (
          <div className="box right-column">
            <h2>Weather in {country.capital}</h2>
            <p><strong>Temperature:</strong> {weather.temperature}°C</p>
            <p><strong>Wind Speed:</strong> {weather.windSpeed} m/s</p>
            <p>{weather.description}</p>
            <img src={weather.icon} alt="weather icon" className="weather-icon" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Country;
