import { getCurrentWeatherAPI } from "@services/weather";
import { fetchJSON } from "@utils/fetch";

async function getCurrentWeatherInServerSide(
  latitude: number,
  longitude: number
) {
  console.log(process.env.OPEN_WEATHER_API_KEY)
  const { url } = getCurrentWeatherAPI(
    latitude,
    longitude,
    process.env.OPEN_WEATHER_API_KEY as string
  );
  try {
    const currentWeather = await fetchJSON(url);
    console.log(currentWeather);
    return currentWeather;
  } catch (error) {
    console.error(error);

    return { error };
  }
}
export { getCurrentWeatherInServerSide };
