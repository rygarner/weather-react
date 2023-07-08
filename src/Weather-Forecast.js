import React, { useEffect, useState } from "react";
import Axios from "axios";

function formatForecastDate(date) {
  const options = { weekday: "short", month: "short", day: "numeric" };
  return date.toLocaleDateString(undefined, options);
}

export default function WeatherForecast(props) {
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    function displayForecast(response) {
      let forecast = response.data.daily;
      let forecastData = forecast.slice(1, 7).map((forecastDay) => {
        return {
          date: new Date(forecastDay.dt * 1000),
          icon: forecastDay.weather[0].icon,
          maxTemp: Math.round(forecastDay.temp.max),
          minTemp: Math.round(forecastDay.temp.min),
        };
      });
      setForecastData(forecastData);
    }

    let apiKey = "aca4dd3643b89e94dbd3cac6cf6f2638";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

    Axios.get(apiUrl).then(displayForecast);
  }, [props.coordinates]);

  return (
    <div className="weather-forecast">
      <div className="row justify-content-evenly forecast-entrance">
        {forecastData.map((forecastDay, index) => (
          <div className="col-2 weather-forecast-day" key={index}>
            <div className="weather-forecast-date">
              {formatForecastDate(forecastDay.date)}
            </div>
            <img
              src={`https://openweathermap.org/img/wn/${forecastDay.icon}@2x.png`}
              alt="Weather Icon"
            />
            <br />
            <span className="forecast-max">{forecastDay.maxTemp}°</span>/
            <span className="forecast-min">{forecastDay.minTemp}°</span>
          </div>
        ))}
      </div>
    </div>
  );
}
