import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div class="header-left">
        <div class="current-city">Johannesburg</div>
        <div class="current-day-time">Saturday 20:00</div>
      </div>
      <div class="header-right">
        <div class="info-group">
          <div class="current-precip">Precipitation: 0%</div>
          <div class="current-hum">Humidity: 42%</div>
          <div class="current-wind">Wind: 10 km/h</div>
        </div>
      </div>

      <div class="header-far-right">
        <div class="weather-icon-large">
          <i class="fa-solid fa-cloud-sun"></i>
          <span class="temp">11</span>
          <sup>
            <a href="/" id="celsius">
              ℃
            </a>{" "}
            |
            <a href="/" id="fahrenheit">
              ℉
            </a>
          </sup>
          <br />
          <div class="more-info">Clear with periodic clouds</div>
        </div>
      </div>
    </div>
  );
}
