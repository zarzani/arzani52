import React,{ useState} from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
    const [ready, setReady] = useState (false);
    const [weatherData, setWeatherData] = useState({ });
    function  handleResponse (response) {
        console.log(response.data);
        
        setReady(true);
        setWeatherData ({
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            wind: response.data.wind.speed,
            city: response.data.name,
        });
    }
    if(ready) {
        return (
            <div className="weather"> 
            <form>
                <div className="row" >
                    <div className="col-6">
                        <input type="search" placeholder="Enter city.." className="form-control" />
                        </div>
                        <div className="col-6">
                        <input type="submit" value="search" className="btn btn-primary" /> 
                        </div>
                    
                </div>
            </form>
            <h1> {weatherData.city} </h1>
            <ul>
                <li>
                    07.00
                </li>
                <li> {weatherData.description} </li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Mostly sunny"  />
                    <span className="temperature" >{weatherData.temperature} </span>  
                    <span className="unit" >°F °C</span>
                </div>
                <div className="col-6">
                    <ul>
                        
                        <li> Humidity: {weatherData.humidity} % </li>
                        <li> Wind: {weatherData.wind} mph</li>
                    </ul>
                </div>
            </div>
            
            </div> )

} else { 
    let apiKey = "866a208a73eeff02182218e9441647a1";
    let city = " New york";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    
return ("loading"); }
   
        }
    