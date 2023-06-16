import React from "react";
import axios from "axios";

export default function CurrentWeather() {
  return (
    <div className="current-weather">
      <div className="row align-items-start">
        <div className="col">
          <p className="info-left">
            <span id="time"></span> <br />
            <span className="current-temp" id="current-temp">
              --
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
              ------
            </span>
            <br />
            <span className="max-temp" id="max-temp">
              --
            </span>
            /
            <span className="min-temp" id="min-temp">
              --
            </span>
            <br />
          </p>
        </div>
        <div className="col">
          <p className="info-center">
            <span id="current-date">----</span> <br />
            <img
              src="https://openweathermap.org/img/wn/10d@2x.png"
              alt="weather icon"
              className="weather-emoji"
              id="weather-icon"
            />
          </p>
        </div>
        <div className="col">
          <p className="info-right">
            Humidity: <span id="humidity">--</span>
            <br />
            Feels Like: <span id="feels-like">--</span>
            <br />
            Wind: <span id="windspeed">--</span>
            <br />
            <span id="description"></span>
          </p>
        </div>
      </div>
    </div>
  );
}
