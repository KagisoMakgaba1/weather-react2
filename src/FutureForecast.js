import React from "react";
import "./FutureForecast.css";

export default function FutureForecast() {
  return (
    <div class="future-forecast">
      <div class="row">
        <div class="col">
          <div class="future-forecast-days">
            Sat
            <div class="weather-icon">
              <i class="fa-solid fa-cloud-sun"></i>
            </div>
            <div class="day-temps">
              <span class="max-temp">19°</span> 4°
            </div>
          </div>
        </div>
        <div class="col">
          <div class="future-forecast-days">
            Sun
            <div class="weather-icon-sun">
              <i class="fa-solid fa-sun"></i>
            </div>
            <div class="day-temps">
              <span class="max-temp">13°</span> -2°
            </div>
          </div>
        </div>

        <div class="col">
          <div class="future-forecast-days">
            Mon
            <div class="weather-icon">
              <i class="fa-solid fa-cloud-sun"></i>
            </div>
            <div class="day-temps">
              <span class="max-temp">9°</span> -1°
            </div>
          </div>
        </div>

        <div class="col">
          <div class="future-forecast-days">
            Tue
            <div class="weather-icon-sun">
              <i class="fa-solid fa-sun"></i>
            </div>
            <div class="day-temps">
              <span class="max-temp">13°</span> 1°
            </div>
          </div>
        </div>
        <div class="col">
          <div class="future-forecast-days">
            Wed
            <div class="weather-icon">
              <i class="fa-solid fa-cloud-sun"></i>
            </div>
            <div class="day-temps">
              <span class="max-temp">15°</span> 3°
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
