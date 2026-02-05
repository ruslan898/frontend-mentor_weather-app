import Header from './ui/header/Header';
import SearchForm from './ui/search-form/SearchForm';
import CurrentForecast from './ui/currentForecast/CurrentForecast';
import DailyForecast from './ui/dailyForecast/dailyForecast';
import HourlyForecast from './ui/hourlyForecast/HourlyForecast';

import './app.scss';

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <div className="container">
          <h1 className="main-title">How’s the sky looking today?</h1>
          <div className="app-main">
            <SearchForm />
            <CurrentForecast />
            <DailyForecast />
            <HourlyForecast />
          </div>
        </div>
      </main>
    </div>
  );
}
