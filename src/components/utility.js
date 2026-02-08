import iconDrizzle from '/src/assets/images/icon-drizzle.webp';
import iconOvercast from '/src/assets/images/icon-overcast.webp';
import iconSunny from '/src/assets/images/icon-sunny.webp';
import iconPartlyCloudy from '/src/assets/images/icon-partly-cloudy.webp';
import iconSnow from '/src/assets/images/icon-snow.webp';
import iconFog from '/src/assets/images/icon-fog.webp';
import iconRain from '/src/assets/images/icon-rain.webp';
import iconStorm from '/src/assets/images/icon-storm.webp';

export function getWeatherIcon(weatherCode) {
  if (weatherCode === 0) {
    return iconSunny;
  }
  if (weatherCode >= 1 && weatherCode <= 2) {
    return iconPartlyCloudy;
  }
  if (weatherCode === 3) {
    return iconOvercast;
  }
  if (weatherCode >= 45 && weatherCode <= 48) {
    return iconFog;
  }
  if (weatherCode >= 51 && weatherCode <= 57) {
    return iconDrizzle;
  }
  if (weatherCode >= 61 && weatherCode <= 67) {
    return iconRain;
  }
  if (weatherCode >= 71 && weatherCode <= 77) {
    return iconSnow;
  }
  if (weatherCode >= 80 && weatherCode <= 82) {
    return iconRain;
  }
  if (weatherCode >= 85 && weatherCode <= 86) {
    return iconSnow;
  }
  if (weatherCode >= 95 && weatherCode <= 99) {
    return iconStorm;
  }
}

export function isMetricUnit(obj, prop) {
  if (prop === 'majority') {
    const metricPropCount = Object.values(obj).reduce(
      (total, item) => (item === 'Metric' ? total + 1 : total),
      0,
    );

    return metricPropCount >= 2
  }
  return obj[prop] === 'Metric';
}