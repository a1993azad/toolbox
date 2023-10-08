"use client";
/// <reference path="@types/graphql.d.ts" />
import { Button } from "react-daisyui";
import GlassCard from "@components/GlassCard";
import Loading from "@components/Loading";
import WeatherTitle from "@components/WeatherTitle";
import { IWeatherProps } from "@models/IWeather";
import Image from "next/image";
import React from "react";
import GET_THREE_HOURLY_FORECAST from "@graphql/weather/queries/getThreeHourlyForecast.gql";
import { useLazyQuery } from "@apollo/client";
import ForecastContainer from "@components/ForecastContainer";

function WeatherResult(props: IWeatherProps) {
  const { error, weather, currentWeather, loaded } = props;

  const [getThreeHourlyForecast, { loading }] = useLazyQuery(
    GET_THREE_HOURLY_FORECAST,
    { fetchPolicy: "network-only" }
  );
  const [threeHourlyForecast, setThreeHourlyForecast] = React.useState<any>();
  const showThreeHourlyForecast = React.useCallback(async () => {
    try {
      if (!loading) {
        const res = await getThreeHourlyForecast({
          variables: {
            lat: String(currentWeather?.coord?.lat),
            lon: String(currentWeather?.coord?.lon),
          },
        });
        console.log(res.data.getThreeHourlyForecast);
        setThreeHourlyForecast(res.data.getThreeHourlyForecast);
      }
    } catch (error) {
      if (error) {
        const { message } = error as Error;
        console.error(message);
      }
    }
  }, [loading, currentWeather, getThreeHourlyForecast]);
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
      <div className="hero-content text-center text-neutral-content z-10 relative w-full max-w-lg ">
        <GlassCard
          actions={
            !error && (
              <Button
                onClick={showThreeHourlyForecast}
                loading={loading}
                color="primary"
              >
                {threeHourlyForecast ? "Reload" : "Forecast"}
              </Button>
            )
          }
          description={weather?.description}
          image={
            !!weather?.icon ? (
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
              </>
            ) : null
          }
          title={<WeatherTitle currentWeather={currentWeather} error={error} />}
        >
          {!!threeHourlyForecast && (
            <ForecastContainer data={threeHourlyForecast} />
          )}
        </GlassCard>
      </div>
    </div>
  );
}

export default WeatherResult;
