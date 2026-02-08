import { useState, useEffect } from 'react';
import Header from './ui/header/Header';
import SearchForm from './ui/search-form/SearchForm';
import CurrentForecast from './ui/currentForecast/CurrentForecast';
import DailyForecast from './ui/dailyForecast/dailyForecast';
import HourlyForecast from './ui/hourlyForecast/HourlyForecast';
import Skeleton from './ui/skeleton/Skeleton';
import Error from './ui/error/Error';
import { isMetricUnit } from './utility';

// To-do
// 1. Display different error messages depending on response status

import './app.scss';

export default function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [appInfo, setAppInfo] = useState({
    hourlyTimeIndex: 15,
    unitTypes: {
      temperature: 'Metric',
      windSpeed: 'Metric',
      precipitation: 'Metric',
    },
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unitFetchUrls = {
      temperature: !isMetricUnit(appInfo.unitTypes, 'temperature')
        ? '&temperature_unit=fahrenheit'
        : '',
      windSpeed: !isMetricUnit(appInfo.unitTypes, 'windSpeed')
        ? '&wind_speed_unit=mph'
        : '',
      precipitation: !isMetricUnit(appInfo.unitTypes, 'precipitation')
        ? '&precipitation_unit=inch'
        : '',
    };

    const unitFetchString = Object.values(unitFetchUrls).join('');

    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&timezone=auto${unitFetchString}`,
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
  }, [appInfo.unitTypes]);

  function toggleUnitType(obj, prop) {
    if (prop === 'all') {
      const isMajorityMetric = isMetricUnit(obj, 'majority');

      const newObj = Object.fromEntries(
        Object.keys(obj).map((key) => [
          key,
          isMajorityMetric ? 'Imperial' : 'Metric',
        ]),
      );

      setAppInfo({
        ...appInfo,
        unitTypes: {
          ...newObj,
        },
      });

      return;
    }

    const isMetric = isMetricUnit(obj, prop);

    setAppInfo({
      ...appInfo,
      unitTypes: {
        ...appInfo.unitTypes,
        [prop]: isMetric ? 'Imperial' : 'Metric',
      },
    });
  }

  function changeHourlyTimeIndex(index) {
    setAppInfo({
      ...appInfo,
      hourlyTimeIndex: index,
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
                      <HourlyForecast
                        weatherData={weatherData}
                        hourlyTimeIndex={appInfo.hourlyTimeIndex}
                        onHourlyTimeIndexChange={changeHourlyTimeIndex}
                      />
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
