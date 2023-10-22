import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
  return (
    <div className="weather-forecast">
      <div className="row">
        <div ClassName="col">
          <div class="weather-forecast-date"> Thu</div>
          <WeatherIcon code="01d" size={36} />
          <div class="weather-forecast-temperatures">
            <span class="weather-forecast-temperature-max">15°</span>
            <span class="weather-forecast-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
