import React from "react";
import "./WeatherForcast.css";
import axios from "axios";


export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "aca4dd3643b89e94dbd3cac6cf6f2638";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  
  axios.get(apiUrl).then(handleResponse);
    return (
    <div className="WeatherForcast" >
        <div className="row">
            <div className="clo">
            <div className="WeatherForecast-day">Thu</div>
            
      <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="mostly sunny" />
      <br/>
      
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">19°</span>
            <span className="WeatherForecast-temperature-min"> / 10°</span>
            </div>
          </div>
        </div>
            </div>
       );
}