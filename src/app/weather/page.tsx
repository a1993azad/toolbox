import { getCurrentWeatherInServerSide } from "@lib/weather";
import React from "react";
import ClientView from "./ClientView";

async function Page({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  let currentWeather = null;
  let error = null;

  if (searchParams?.latitude && searchParams?.longitude) {
    const res = await getCurrentWeatherInServerSide(
      parseFloat(searchParams?.latitude as string),
      parseFloat(searchParams?.longitude as string)
    );
    if (res?.error) {
      ({ error } = res);
    } else if (res) {
      currentWeather = res;
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

export default Page;
