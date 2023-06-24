import React, { useState } from "react";

export default function WeatherUnits(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "fahrenheit") {
    return (
      <div>
        <span className="current-temp" id="current-temp">
          {Math.round(props.fahrenheit)}°
        </span>
        <span className="units">
          <a
            href="/"
            onClick={convertToCelsius}
            className="current-celsius"
            id="current-celsius"
          >
            C
          </a>{" "}
          |
          <a
            href="/"
            onClick={convertToFahrenheit}
            className="current-fahrenheit"
            id="current-fahrenheit"
          >
            F
          </a>
        </span>
      </div>
    );
  } else {
    let celsius = (props.fahrenheit - 32) * (5 / 9);
    return (
      <div>
        <span className="current-temp" id="current-temp">
          {Math.round(celsius)}°
        </span>
        <span className="units">
          <a
            href="/"
            onClick={convertToCelsius}
            className="current-celsius"
            id="current-celsius"
          >
            C
          </a>{" "}
          |
          <a
            href="/"
            onClick={convertToFahrenheit}
            className="current-fahrenheit"
            id="current-fahrenheit"
          >
            F
          </a>
        </span>
      </div>
    );
  }
}
