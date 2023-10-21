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
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
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
        <div class="weather-app-wrapper">
          <div class="weather-app">
            <form class="search-form" id="city-form" onSubmit={handleSubmit}>
              <div class="row">
                <div class="col-8">
                  <input
                    type="search"
                    placeholder="Search location..."
                    class="form-control"
                    id="inputCity"
                    autocomplete="off"
                    onChange={handleCityChange}
                  />
                </div>
                <div class="col-2">
                  <input type="submit" value="Search" class="btn btn-primary" />
                </div>
                <div class="col-2">
                  <button
                    class="btn btn-success current"
                    id="current-location-btn"
                  >
                    Current
                  </button>
                </div>
              </div>
            </form>
            <WeatherInfo data={weatherData} />

            <div class="weather-forecast" id="forecast"></div>
          </div>
          <small class="source-code">
            This project was coded by{" "}
            <a
              href="https://funny-clafoutis-782363.netlify.app/"
              target="_blank"
            >
              Reka Acs
            </a>{" "}
            and is {""}
            <a href="https://github.com/RekaMel/weather-react" target="_blank">
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
