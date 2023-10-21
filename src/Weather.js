import React from "react";
import "./Weather.css";
import axios from "axios";
import { Circles } from "react-loader-spinner";

export default function Weather(props) {
  //function handleResponse(response) {
  //alert(`The weather in ${response.data.name} is ${response.data.main.temp}`);
  //}

  //let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  //let units = "metric";
  //let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;

  //axios.get(apiUrl).then(handleResponse);

  return (
    <div className="Weather">
      <div class="weather-app-wrapper">
        <div class="weather-app">
          <form class="search-form" id="city-form">
            <div class="row">
              <div class="col-8">
                <input
                  type="search"
                  placeholder="Search location..."
                  class="form-control"
                  id="inputCity"
                  autocomplete="off"
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

          <div class="row city">
            <div class="col-7">
              <h1 class="city-name" id="city">
                Vienna
              </h1>
              <p id="dayTime">Wed 10:39am</p>
            </div>
            <div class="col-5">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="clear"
                class="icon"
                id="icon"
              />

              <span class="temperature" id="temp">
                21
              </span>
              <span class="units">
                <a href="#" id="celsius" class="active">
                  °C
                </a>
                <a href="#" id="fahrenheit">
                  {" "}
                  °F
                </a>
              </span>
            </div>
          </div>
          <div class="row weather-details">
            <div class="col-4">
              <i class="fa-solid fa-droplet"></i>
              <i class="fa-solid fa-percent"></i> <span id="hum"></span>%
            </div>
            <div class="col-4 description" id="type"></div>
            <div class="col-4">
              <i class="fa-solid fa-wind"></i> <span id="speed"></span> km/h
            </div>
          </div>
          <div class="weather-forecast" id="forecast"></div>
        </div>
        <small class="source-code">
          This project was coded by{" "}
          <a href="https://funny-clafoutis-782363.netlify.app/" target="_blank">
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
}
