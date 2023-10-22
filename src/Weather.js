import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";

import "./Weather.css";
import axios from "axios";
import { Circles } from "react-loader-spinner";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
    });
    setReady(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";

    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (ready) {
    return (
      <div className="Weather">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <form className="search-form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-8">
                  <input
                    type="search"
                    placeholder="Search location..."
                    class="form-control"
                    autocomplete="off"
                    onChange={handleCityChange}
                  />
                </div>
                <div className="col-2">
                  <input
                    type="submit"
                    value="Search"
                    className="btn btn-primary"
                  />
                </div>
                <div className="col-2">
                  <button
                    className="btn btn-success current"
                    id="current-location-btn"
                  >
                    Current
                  </button>
                </div>
              </div>
            </form>
            <WeatherInfo data={weatherData} />

            <div className="weather-forecast"></div>
          </div>
          <small className="source-code">
            This project was coded by{" "}
            <a
              href="https://funny-clafoutis-782363.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Reka Acs
            </a>{" "}
            and is {""}
            <a
              href="https://github.com/RekaMel/weather-react"
              target="_blank"
              rel="noreferrer"
            >
              open sourced on GitHub.
            </a>
          </small>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
