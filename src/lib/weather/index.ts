import { getCurrentWeatherAPI } from "services/weather";
import { fetchJSON } from "utils/fetch";

export const getCurrentWeatherInServerSide = async (
    latitude:number,
    longitude:number
    ) => {
   
      
      const { url } = getCurrentWeatherAPI(
        latitude,
        longitude,
        process.env.OPEN_WEATHER_API_KEY as string
      );
      const res = await fetchJSON(url);
     
      return res;  
  }