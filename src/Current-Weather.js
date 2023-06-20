import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import axios from "axios";

export default function CurrentWeather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
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
      iconUrl: "https://openweathermap.org/img/wn/10d@2x.png",
    });
  }
  if (weatherData.ready) {
    return (
      <div className="current-weather">
        <div className="row align-items-start">
          <div className="col">
            <p className="info-left">
              <span id="time">
                <FormattedTime date={weatherData.date} />
              </span>{" "}
              <br />
              <span className="current-temp" id="current-temp">
                {Math.round(weatherData.temperature)}°
              </span>
              <span className="units">
                <a href="/" className="current-celsius" id="current-celsius">
                  C
                </a>{" "}
                |
                <a
                  href="/"
                  className="current-fahrenheit"
                  id="current-fahrenheit"
                >
                  F
                </a>
              </span>
              <br />
              <span className="current-city" id="current-city">
                {weatherData.city}
              </span>
              <br />
              <span className="max-temp" id="max-temp">
                {Math.round(weatherData.max)}°
              </span>
              /
              <span className="min-temp" id="min-temp">
                {Math.round(weatherData.min)}°
              </span>
              <br />
            </p>
          </div>
          <div className="col">
            <p className="info-center">
              <span id="current-date">
                <FormattedDate date={weatherData.date} />
              </span>{" "}
              <br />
              <img
                src={weatherData.iconUrl}
                className="weather-emoji"
                id="weather-icon"
              />
            </p>
          </div>
          <div className="col">
            <p className="info-right">
              Humidity: <span id="humidity">{weatherData.humidity}%</span>
              <br />
              Feels Like:{" "}
              <span id="feels-like">{Math.round(weatherData.feelsLike)}°</span>
              <br />
              Wind:{" "}
              <span id="windspeed">{Math.round(weatherData.wind)} mph</span>
              <br />
              <span id="description">{weatherData.description}</span>
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "67628a8e6b77943e6a0a6b36c4e89eec";
    let city = "Silver Spring";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handelResponse);

    return "Loading...";
  }
}
