import { useState, useEffect } from 'react';
import Header from './ui/header/Header';
import SearchForm from './ui/search-form/SearchForm';
import CurrentForecast from './ui/currentForecast/CurrentForecast';
import DailyForecast from './ui/dailyForecast/dailyForecast';
import HourlyForecast from './ui/hourlyForecast/HourlyForecast';

import './app.scss';

export default function App() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&timezone=auto',
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP Error. Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setWeatherData(data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="app">
      <Header />
      <main>
        <div className="container">
          <h1 className="main-title">How’s the sky looking today?</h1>
          <div className="app-main">
            {weatherData && (
              <>
                <SearchForm />
                <CurrentForecast weatherData={weatherData} />
                <DailyForecast weatherData={weatherData} />
                <HourlyForecast weatherData={weatherData} />
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
