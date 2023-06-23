import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";

export default function CurrentWeather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handelResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      time: new Date(response.data.dt * 1000),
      feelsLike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      temperature: response.data.main.temp,
      max: response.data.main.temp_max,
      min: response.data.main.temp_min,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}`,
    });
  }

  function search() {
    const apiKey = "67628a8e6b77943e6a0a6b36c4e89eec";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handelResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div>
        <div className="app-name">
          <h1>Welcome!</h1>
        </div>
        <div className="search">
          <form onSubmit={handleSubmit} id="search-bar">
            <input
              type="text"
              placeholder="Enter a City"
              autoComplete="off"
              autoFocus="on"
              id="search-input"
              onChange={handleCityChange}
            />
            <input type="submit" value="Search" className="submit-button" />
            <input
              type="submit"
              value="Current Location"
              className="location-button"
              id="location-button"
            />
          </form>
        </div>
        <div>
          <WeatherInfo data={weatherData} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
