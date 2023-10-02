type lat='latitude'|'lat'
type long='longitude'|'lon'
type LatRecord=Record<lat,string>;
type LongRecord=Record<long,string>;

export interface ICoords extends Partial<LatRecord> , Partial<LongRecord>{}
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
  coord?: ICoords;
}
export interface IWeatherClientViewProps {
  error?: string | null;
  currentWeather?: ICurrentWeather | null;
  query?: ICoords;
}
export interface IWeatherProps extends Pick<IWeatherClientViewProps,"currentWeather" | "error">{
  weather?:IWeather,
  loaded:boolean
}

export default interface IWeatherTitleProps extends Pick<IWeatherClientViewProps,"currentWeather" |"error">{}