import React, {useEffect, useState} from 'react';
import axios from 'axios';

function Dashboard() {
    const [forecast, setForecast] = useState('');
    const [temperature, setTemperature] = useState({});

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=london&appid=${process.env.REACT_APP_API_KEY}&units=imperial`)
            .then(res => {
                console.log('RES: ', res)
                setTemperature(res.data.main);
                setForecast(res.data.name);
            })
    }, [forecast])

  return (
    <div className="dashboard">
      Dashboard

      <div>Forecast: {forecast}</div>
      <div>Temperature: {temperature.temp}</div>
      <div>Temperature: {temperature.temp}</div>
      <div>Max Temperature: {temperature.temp_max}</div>
      <div>Min Temperature: {temperature.temp_min}</div>
    </div>
  );
}

export default Dashboard;
