import { getCurrentWeatherInServerSide } from "@lib/weather";
import React from "react";
import ClientView from "./clientView";

async function Weather({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  let currentWeather;
  let error;
  try {
    if (searchParams?.latitude && searchParams?.longitude) {
      currentWeather = await getCurrentWeatherInServerSide(
        parseFloat(searchParams?.latitude as string),
        parseFloat(searchParams?.longitude as string)
      );

    }
  } catch (err) {
    console.error(err);
    const { message } = err as Error;
    if (message) {
      error = message;
    }
  }

  return (
    <ClientView
      error={error}
      currentWeather={currentWeather}
      query={{
        latitude: searchParams?.latitude as string,
        longitude: searchParams?.longitude as string,
      }}
    />
  );
}

export default Weather;
