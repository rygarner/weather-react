import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import WeatherUnits from "./WeatherUnits";

export default function WeatherInfo(props) {
  return (
    <div>
      <div className="current-weather">
        <div className="row align-items-start">
          <div className="col">
            <p className="info-left">
              <span id="time">
                <FormattedTime date={props.data.date} />
              </span>{" "}
              <br />
              <WeatherUnits fahrenheit={props.data.temperature} />
              <br />
              <span className="current-city" id="current-city">
                {props.data.city}
              </span>
              <br />
              <span className="max-temp" id="max-temp">
                {Math.round(props.data.max)}°
              </span>
              /
              <span className="min-temp" id="min-temp">
                {Math.round(props.data.min)}°
              </span>
              <br />
            </p>
          </div>
          <div className="col">
            <p className="info-center">
              <span id="current-date">
                <FormattedDate date={props.data.date} />
              </span>{" "}
              <br />
              <img
                src={props.data.iconUrl}
                className="weather-emoji"
                id="weather-icon"
              />
            </p>
          </div>
          <div className="col">
            <p className="info-right">
              Humidity: <span id="humidity">{props.data.humidity}%</span>
              <br />
              Feels Like:{" "}
              <span id="feels-like">{Math.round(props.data.feelsLike)}°</span>
              <br />
              Wind:{" "}
              <span id="windspeed">{Math.round(props.data.wind)} mph</span>
              <br />
              <span id="description">{props.data.description}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
