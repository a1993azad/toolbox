interface Coords {
  latitude: string;
  longitude: string;
}
interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}
interface Wind {
  speed: number;
  deg: number;
  gust: number;
}
interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}
interface CurrentWeather {
  wind?: Wind;
  name: string;
  weather?: Weather[];
  main?: Main;
}
export default interface IClientViewProps {
  error?: string;
  currentWeather?: CurrentWeather;
  query?: Coords;
}
