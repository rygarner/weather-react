import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import WeatherUnits from "./WeatherUnits";

export default function WeatherInfo(props) {
  return (
    <div>
      <div className="current-weather">
        <div className="row align-items-start">
          <div className="col info-left info-text">
            <span id="time">
              <FormattedTime date={props.data.date} />
            </span>
            <WeatherUnits fahrenheit={props.data.temperature} />
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
          </div>
          <div className="col info-center info-text">
            <span id="current-date">
              <FormattedDate date={props.data.date} />
            </span>
            <br />
            <img
              src={props.data.iconUrl}
              className="weather-emoji"
              id="weather-icon"
              alt=""
            />
          </div>
          <div className="col info-right">
            <p className="info-text">
              Humidity: <span id="humidity">{props.data.humidity}%</span>
            </p>
            <p className="info-text">
              Feels Like:{" "}
              <span id="feels-like">{Math.round(props.data.feelsLike)}°</span>
            </p>
            <p className="info-text">
              Wind:{" "}
              <span id="windspeed">{Math.round(props.data.wind)} mph</span>
            </p>
            <p id="description" className="info-text">
              {props.data.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
