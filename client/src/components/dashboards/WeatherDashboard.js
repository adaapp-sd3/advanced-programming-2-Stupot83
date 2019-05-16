import React, { Component } from "react";
import ReactWeather from "react-open-weather";
import "react-open-weather/lib/css/ReactWeather.css";
import "./WeatherDashboard.css";

class WeatherDashboard extends Component {
  render() {
    return (
      <div className="WeatherDashboard col-md-9">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.9/css/weather-icons.min.css"
          type="text/css"
        />
        <ReactWeather
          forecast="today"
          apikey="c6f304106b304f4691a101106191305"
          type="city"
          city="London"
        />
      </div>
    );
  }
}

export default WeatherDashboard;
