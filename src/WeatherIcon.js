import React from "react";

export default function WeatherIcon () {
    return (
        <img
        src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
        alt="Mostly sunny"
      />

    )
}