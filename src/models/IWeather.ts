export interface ICoords {
  latitude: string;
  longitude: string;
}
export interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}
export interface IWind {
  speed: number;
  deg: number;
  gust: number;
}
export interface IMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}
export interface ICurrentWeather {
  wind?: IWind;
  name: string;
  weather?: IWeather[];
  main?: IMain;
}
export interface IWeatherClientViewProps {
  error?: string;
  currentWeather?: ICurrentWeather;
  query?: ICoords;
}
export interface IWeatherProps extends Pick<IWeatherClientViewProps,"currentWeather" | "error">{
  weather?:IWeather,
  loaded:boolean
}