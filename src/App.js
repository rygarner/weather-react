import "./App.css";
import "./custom.scss";
import CurrentWeather from "./Current-Weather";

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
        <CurrentWeather defaultCity="New York" />

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
