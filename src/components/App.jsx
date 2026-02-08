import { useState, useEffect } from 'react';
import Header from './ui/header/Header';
import SearchForm from './ui/search-form/SearchForm';
import CurrentForecast from './ui/currentForecast/CurrentForecast';
import DailyForecast from './ui/dailyForecast/dailyForecast';
import HourlyForecast from './ui/hourlyForecast/HourlyForecast';
import Skeleton from './ui/skeleton/Skeleton';
import Error from './ui/error/Error';

// To-do
// 1. Display different error messages depending on response status

import './app.scss';

export default function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [appInfo, setAppInfo] = useState({
    unitType: 'Metric',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const isMetricUnit = appInfo.unitType === 'Metric';
    const imperialUnitFetchUrl =
      '&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch';

    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&timezone=auto${!isMetricUnit ? imperialUnitFetchUrl : ''}`,
    )
      .then((res) => {
        setLoading(true);
        setError(null);
        if (!res.ok) {
          throw new Error('Server error');
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setWeatherData(data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [appInfo.unitType]);

  function toggleUnitType() {
    const isMetricUnit = appInfo.unitType === 'Metric';

    setAppInfo({
      unitType: isMetricUnit ? 'Imperial' : 'Metric',
    });
  }

  return (
    <div className="app">
      <Header appInfo={appInfo} onUnitToggle={toggleUnitType} />
      <main>
        <div className="container">
          {error ? (
            <Error error={error} />
          ) : (
            <>
              <h1 className="main-title">How’s the sky looking today?</h1>
              <div className={'app-main'}>
                <SearchForm />

                {loading ? (
                  <Skeleton />
                ) : (
                  weatherData && (
                    <>
                      <CurrentForecast weatherData={weatherData} />
                      <DailyForecast weatherData={weatherData} />
                      <HourlyForecast weatherData={weatherData} />
                    </>
                  )
                )}
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
