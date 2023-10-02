import { getCurrentWeatherAPI } from "@services/weather";
import { fetchJSON } from "@utils/fetch";

async function getCurrentWeatherInServerSide(
  latitude: number,
  longitude: number
) {
  const { url } = getCurrentWeatherAPI(
    latitude,
    longitude,
    process.env.OPEN_WEATHER_API_KEY as string
  );
  try {
    return await fetchJSON(url)
  } catch (error) {
    return {error}
  }
}
export { getCurrentWeatherInServerSide };
