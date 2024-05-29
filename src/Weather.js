import React from "react";
import "./Weather.css";

export default function Weather() {
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
        <h1> Tehran </h1>
        <ul>
            <li>
                wednesday 07.00
            </li>
            <li> mostly cloudy</li>
        </ul>
        <div className="row">
            <div className="col-6">
                <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Mostly sunny"  />
                <span className="temperature" >83 </span>  
                <span className="unit" >°F °C</span>
            </div>
            <div className="col-6">
                <ul>
                    <li> Precipitation: 0% </li>
                    <li> Humidity: 15% </li>
                    <li> Wind: 18 mph</li>
                </ul>
            </div>
        </div>
        
        </div> )
        }
    