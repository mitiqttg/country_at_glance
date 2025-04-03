import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import Country from './components/Country';
import countryService from './services/country';
import Notification from './components/Notification';

const App = () => {
  const api_key = import.meta.env.VITE_SOME_KEY;
  
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [message, setMessage] = useState(null);
  
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    countryService.getAll().then(initialCountries => {
      setCountries(initialCountries);
    });
  }, []);

  const handleFilterCountry = (event) => {
    const inputValue = event.target.value.toLowerCase().trim();
  
    if (!inputValue) {
      setFilteredCountries([]);
      setSelectedCountry(null);
      setWeather(null);
      setMessage('');
      return;
    }
  
    const filtered = countries.filter(country =>
      country.name.common.toLowerCase().includes(inputValue)
    );
  
    if (filtered.length > 10) {
      setMessage("Too many matches, please refine your search");
      setFilteredCountries([]);
      setSelectedCountry(null);
      setWeather(null);
    } else if (filtered.length === 1) {
      setMessage("");
      fetchCountryData(filtered[0]);
    } else if (filtered.length === 0) {
      setMessage("No countries found");
      setFilteredCountries([]);
      setSelectedCountry(null);
      setWeather(null);
    } else {
      setMessage("");
      setFilteredCountries(filtered);
      setSelectedCountry(null);
      setWeather(null);
    }
  };

  const fetchCountryData = (country) => {
    setSelectedCountry({
      name: country.name.common,
      capital: country.capital[0],
      area: country.area,
      population: country.population,
      flag: country.flags.png,
      languages: Object.values(country.languages).join(", "),
      currency: Object.values(country.currencies)[0].name,
      currencySymbol: Object.values(country.currencies)[0].symbol,
      subregion: country.subregion,
    });

    fetchWeather(country.capitalInfo.latlng[0], country.capitalInfo.latlng[1]);
  };

  const fetchWeather = (lat, lon) => {
    countryService.getWeatherCountryCapital(lat, lon, api_key)
      .then(data => {
        setWeather({
          temperature: (data.main.temp - 273.15).toFixed(2),
          windSpeed: data.wind.speed,
          description: data.weather[0].description,
          icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        });
      });
  };

  return (
    <div>
      {filteredCountries.length === 0 && (<h3>
        Country
        <span>Country</span>
        <span>Country</span>
        <span>at a glance</span>
      </h3>)}
      <div className="filter-section">
        <Filter handleFilterCountry={handleFilterCountry} />
        <Notification message={message} />
      </div>

      {filteredCountries.length > 1 && !selectedCountry && (
        <div className="container">
          <ul>
            {filteredCountries.slice(0, 10).map(country => (
              <li key={country.cca2}>
                <button onClick={() => fetchCountryData(country)}>{country.name.common} </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {selectedCountry && <Country country={selectedCountry} weather={weather} />}
    </div>
  );
};

export default App;
