import './App.css';
import React, { useState, useEffect } from 'react';

const api={
  key: "5141e7b91048915162033fd01b3f4f0f",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const[city, setCity] = useState({})
  const[weather, setWeather] = useState({})

 
useEffect(()=>{
    fetch(`${api.base}weather?q=${city}&appid=${api.key}`)
    .then(response => response.json())
    .then(data =>{
      setWeather(data);
      setCity("");
      console.log(data);
  }).catch(alert("City not found"));
},[setCity])

return (
  <div className="App">
     <form onSubmit={ e => setCity(e.target.value)}>
          <input type="text" value={city} onChange={e => setCity(e.target.value)} />
      </form>
    {(typeof weather.main != "undefined") ? (
      <div className="weather-box">
      <div className='location'>{weather.name}</div>
      <div className='temp'>{weather.main.temp}*C</div>
      </div>
    ) : ('')}
    
  </div>
);
}

export default App;