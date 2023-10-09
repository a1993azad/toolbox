export function getCurrentWeatherAPI(
  lat: number,
  lon: number,
  API_Key: string
) {
  return {
    url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_Key}&units=metric`,
  };
}

export function get3hForecastWeatherAPI(
  lat: number,
  lon: number,
  API_Key: string
) {
  return {
    url: `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_Key}&units=metric`,
  };
}
