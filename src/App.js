import "./App.css";
import "./custom.scss";
import CurrentWeather from "./Current-Weather";
import WeatherForecast from "./Weather-Forecast";

export default function App() {
  return (
    <>
      <section className="wrapper">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars2"></div>
        <div id="title"></div>
      </section>
      <div className="outer-border">
        <div className="app-name">
          <h1>Welcome!</h1>
        </div>
        <div className="search">
          <form id="search-bar">
            <input
              type="text"
              placeholder="Enter a City"
              autoComplete="off"
              autoFocus="on"
              id="search-input"
            />
            <input type="submit" value="Search" className="submit-button" />
            <input
              type="submit"
              value="Current Location"
              className="location-button"
              id="location-button"
            />
          </form>
          <div className="degrees"></div>
        </div>
        <CurrentWeather />
        <WeatherForecast />

        <div>
          <footer className="footer">
            This Project was coded by Ry Garner and is{" "}
            <a
              href="https://github.com/rygarner/SheCodes-Project"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on GitHub
            </a>
          </footer>
        </div>
      </div>
    </>
  );
}
