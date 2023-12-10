import React from "react";
import SearchForm from "./SearchForm";
import Header from "./Header";
import FutureForecast from "./FutureForecast";
import Footer from "./Footer";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <SearchForm />
        <br />
        <Header />
        <br />
        <FutureForecast />
        <Footer />
      </div>
    </div>
  );
}
