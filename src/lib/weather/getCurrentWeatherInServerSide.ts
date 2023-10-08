import { getCurrentWeatherAPI } from "@services/weather";
import { fetchJSON } from "@utils/fetch";

async function getCurrentWeatherInServerSide(
  latitude: number,
  longitude: number
){
  const { url } = getCurrentWeatherAPI(
    latitude,
    longitude,
    process.env.OPEN_WEATHER_API_KEY as string
  );
  try {
    const currentWeather = await fetchJSON(url);
    return currentWeather;
  } catch (error) {
    console.error(error);
    if(error){
      const {message}=error as Error;
      return { error:message };
    }
    return {error:'Error!'}
  }
}

export default getCurrentWeatherInServerSide ;
