import React from "react";
import "./WeatherForcast.css";

export default function WeatherForcast (){
    return 
    <div className="WeatherForcast" >
        <div className="row">
            <div className="clo">
            <div className="WeatherForecast-day">Thu</div>
            
          <img 
          src= {"https://ssl.gstatic.com/onebox/weather/64/rain_light.png"}  alt="mostly sun" size={36} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">19°</span>
            <span className="WeatherForecast-temperature-min">10°</span>
          </div>
        </div>
            </div>
        </div>
}