import { useState, useEffect } from 'react';
import Header from './ui/header/Header';
import SearchForm from './ui/search-form/SearchForm';
import CurrentForecast from './ui/currentForecast/CurrentForecast';
import DailyForecast from './ui/dailyForecast/dailyForecast';
import HourlyForecast from './ui/hourlyForecast/HourlyForecast';
import Skeleton from './ui/skeleton/Skeleton';
import Error from './ui/error/Error';
import { isMetricUnit } from './utility';

import './app.scss';

export default function App() {
  // ============================ State declaration ====================================
  const [weatherData, setWeatherData] = useState(null);

  const [locationInfo, setLocationInfo] = useState({
    locationName: 'Berlin, Germany',
    latitude: '52.52',
    longitude: '13.41',
  });

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

  const [inputValue, setInputValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchError, setSearchError] = useState(null);
  // =====================================================================================

  // =============================== useEffect ===========================================
  useEffect(() => {
    if (inputValue.length >= 2) {
      fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${inputValue}`)
        .then((res) => {
          setSearchLoading(true);
          setSearchError(null);
          if (!res.ok) {
            throw new Error('Nothing found!');
          }
          return res.json();
        })
        .then((data) => {
          console.log(data.results);
          setSearchResults(data.results.slice(0, 4));
        })
        .catch((err) => {
          setSearchError(err);
        })
        .finally(() => {
          setSearchLoading(false);
        });
    }
  }, [inputValue]);
  // =====================================================================================

  // =============================== useEffect ===========================================
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

    const { latitude, longitude } = locationInfo;

    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&timezone=auto${unitFetchString}`,
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
  }, [appInfo.unitTypes, locationInfo]);
  // =====================================================================================

  // =====================================================================================
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

  function changeInputValue(value) {
    setInputValue(value);
  }

  function changeLocationInfo({ locationName, latitude, longitude }) {
    setLocationInfo({
      locationName,
      latitude,
      longitude,
    });
    setInputValue('');
  }

  function renderComponents() {
    if (error) {
      return (
        <Error locationInfo={locationInfo} setLocationInfo={setLocationInfo} />
      );
    } else {
      return (
        <>
          <h1 className="main-title">How’s the sky looking today?</h1>
          <div className={'app-main'}>
            <SearchForm
              inputValue={inputValue}
              onInputChange={changeInputValue}
              searchResults={searchResults}
              onLocationChange={changeLocationInfo}
            />
            {loading ? (
              <Skeleton />
            ) : (
              weatherData && (
                <>
                  <CurrentForecast
                    weatherData={weatherData}
                    locationName={locationInfo.locationName}
                  />
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
      );
    }
  }
  // =====================================================================================

  return (
    <div className="app">
      <Header appInfo={appInfo} onUnitToggle={toggleUnitType} />
      <main>
        <div className="container">{renderComponents()}</div>
      </main>
    </div>
  );
}
