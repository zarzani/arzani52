import React from "react";
import Weather from "./Weather";
import './App.css';
import Hello from "./Hello";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather city="New York" />
        <Hello />
      
        <footer> this is my git hub link <a href="https://github.com/zarzani/arzani52"  target="_blank"
          rel="noopener noreferrer"> my git hub</a> </footer>
      
      </div>
    </div>
  );
}


