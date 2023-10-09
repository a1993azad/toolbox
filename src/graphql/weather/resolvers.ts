import { ICoords } from "@models/IWeather"
import { get3hForecastWeatherAPI } from "@services/weather";
import { fetchJSON } from "@utils/fetch";

const resolvers = {
    Query: {
      getThreeHourlyForecast: async (_:any, { lat,lon }:ICoords) => {
        try {
          const { url } = get3hForecastWeatherAPI(
            parseFloat(lat as string),
            parseFloat(lon as string),
            process.env.OPEN_WEATHER_API_KEY as string
          );
          const res= await fetchJSON(url);
          res
          return res;
            
        } catch (error) {
          console.error(error)
          throw new Error("Something went wrong")
        }
      }
    }
  }
  
  export default resolvers