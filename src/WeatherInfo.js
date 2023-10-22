import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row city">
        <div className="col-7">
          <h1 className="city-name" id="city">
            {props.data.city}
          </h1>
          <p>
            <FormattedDate date={props.data.date} />
          </p>
        </div>
        <div className="col-2">
          <WeatherIcon code={props.data.icon} size={52} className="icon" />
        </div>
        <div className="col-3">
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
      </div>
      <div className="row weather-details">
        <div className="col-4">
          <i className="fa-solid fa-droplet"></i>
          <i className="fa-solid fa-percent"></i>{" "}
          <span>{props.data.humidity}</span>%
        </div>
        <div className="col-4 description">{props.data.description}</div>
        <div className="col-4">
          <i className="fa-solid fa-wind"></i> <span>{props.data.wind}</span>{" "}
          km/h
        </div>
      </div>
    </div>
  );
}
