import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/'

const getAll = async () => {
  const request = axios.get(baseUrl+"api/all")
  const response = await request
  return response.data
}

const getCountry = async (name) => {
  const request = axios.get(baseUrl + `api/name/${name}`)
  const response = await request
  return response.data
}

const getLocationCountryCapital = async (city, apiKey) => {
  const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`)
  return response.data[0]
}

const getWeatherCountryCapital = async (lat, lon, apiKey) => {
  const requestWeather = axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
  const response = await requestWeather
  return response.data
}

export default { 
  getAll, getCountry, getWeatherCountryCapital, getLocationCountryCapital, getCountryInformation
}