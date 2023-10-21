import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div class="row city">
        <div class="col-7">
          <h1 class="city-name" id="city">
            {props.data.city}
          </h1>
          <p id="dayTime">
            <FormattedDate date={props.data.date} />
          </p>
        </div>
        <div class="col-5">
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            class="icon"
            id="icon"
          />

          <span class="temperature" id="temp">
            {Math.round(props.data.temperature)}
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
          <i class="fa-solid fa-percent"></i>{" "}
          <span id="hum">{props.data.humidity}</span>%
        </div>
        <div class="col-4 description" id="type">
          {props.data.description}
        </div>
        <div class="col-4">
          <i class="fa-solid fa-wind"></i>{" "}
          <span id="speed">{props.data.wind}</span> km/h
        </div>
      </div>
    </div>
  );
}
