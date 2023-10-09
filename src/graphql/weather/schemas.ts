import { gql } from 'graphql-tag'

const typeDefs = gql`
  type Query {
    getThreeHourlyForecast(lat:String,lon:String): ThreeHourlyForecast
  }

  type ThreeHourlyForecast {
    cod: String
    message: Int
    cnt: Int
    list: [Forecast!]!
    city: City
  }
  
  enum Pod {
    d
    n
  }
  type ForecastSys {
    pod: Pod
  }
  type Weather {
    id: Int
    main: String
    description: String
    icon: String
  }
  type Main {
    temp: Float
    feels_like: Float
    pressure: Int
    humidity: Int
    temp_min: Float
    temp_max: Float
    sea_level: Int
    grnd_level: Int
    temp_kf: Float
  }
  type Wind {
    speed: Float
    deg: Int
    gust: Float
  }   
  type Clouds {
    all: Int
  }
 
  type City {
    id: Int
    name: String
    coord: Coordinate
    country: String
    population: Int
    timezone: Int
    sunrise: Int
    sunset: Int
  }
  type Coordinate {
    lon: Float
    lat: Float
  }
  type Forecast {
    dt: Int
    main: Main
    weather: [Weather]
    clouds: Clouds
    wind: Wind
    visibility: Int
    pop: Float
    sys: ForecastSys
    dt_txt: String
  }
`
export default typeDefs