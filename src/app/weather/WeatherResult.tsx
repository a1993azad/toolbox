import Loading from "@components/Loading";
import { IWeatherProps } from "@models/IWeather";
import Image from "next/image";
import React from "react";

function WeatherResult(props: IWeatherProps) {
  const { error, weather, currentWeather, loaded } = props;
  if (!loaded) return <Loading />;
  return (
    <div className="hero min-h-screen">
      {weather?.main && (
        <video
          playsInline
          autoPlay={true}
          muted
          loop
          poster={`/assets/images/weather/${weather?.main}.png`}
          id="bgvid"
          className="video-bg blur-md"
        >
          <source
            src={`/assets/videos/weather/${weather?.main}.mp4`}
            type="video/mp4"
          />
        </video>
      )}
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <div className="card w-96 glass">
            <figure>
              <Image
                width={100}
                height={100}
                src={`https://openweathermap.org/img/wn/${weather?.icon}@2x.png`}
                alt={weather?.main || ""}
              />
              <b className="text-lg text-white">{currentWeather?.main?.temp} &deg;C</b>
            </figure>
            <div className="card-body">
              <div className="card-title">
                {!!error ? (
                  <div className="bg-red-800 text-red-200 p-2 text-center">
                    {error}
                  </div>
                ) : (
                  <h2 className="mb-5 text-5xl font-bold text-gray-600">
                    {currentWeather?.name}
                  </h2>
                )}
              </div>
              <p className="text-amber-50 text-start">{weather?.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Forecast</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherResult;
