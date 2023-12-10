import React from "react";
import "./SearchForm.css";

export default function SearchForm() {
  return (
    <form class="search-bar" id="cityForm">
      <input type="text" id="cityInput" placeholder="Enter city name..." />
      <button type="button" class="btn">
        Search
      </button>
      <button type="button" class="currentLocationBtn">
        Current
      </button>
    </form>
  );
}
