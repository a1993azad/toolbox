"use client";
import GlassCard from "@components/GlassCard";
import Loading from "@components/Loading";
import WeatherTitle from "@components/WeatherTitle";
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
      <div className="hero-content text-center text-neutral-content z-10 relative">
        <div className="max-w-md">
          <GlassCard
            actions={!error && <button className="btn btn-primary">Forecast</button>}
            description={weather?.description}
            image={!!weather?.icon ?
              <>
                <Image
                  width={100}
                  height={100}
                  src={`https://openweathermap.org/img/wn/${weather?.icon}@2x.png`}
                  alt={weather?.main || ""}
                />
                <b className="text-lg text-white">
                  {currentWeather?.main?.temp} &deg;C
                </b>
              </>:null
            }
            title={
              <WeatherTitle currentWeather={currentWeather} error={error} />
            }
          />
        </div>
      </div>
    </div>
  );
}

export default WeatherResult;
