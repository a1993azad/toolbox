"use client";
import IClientViewProps from "@models/IClientViewProps";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { getCurrentLocation } from "utils/location";

function ClientView(props: IClientViewProps) {
  const { error, currentWeather, query } = props;
  const { push } = useRouter();
  let weather;
  if (currentWeather?.weather) {
    [weather] = currentWeather?.weather;
  }

  const initLocation = React.useCallback(async () => {
    if (query?.latitude && query?.longitude) {
      return;
    }
    const {
      coords: { latitude, longitude },
    } = await getCurrentLocation();
    push(`/weather?latitude=${latitude}&longitude=${longitude}`);
  }, [query, push]);

  React.useEffect(() => {
    initLocation();
  }, [initLocation]);
  
  return !!error ? (
    <div className="bg-red-800 text-red-200 p-2 text-center">{error}</div>
  ) : (
    <div>
      Current Weather: 
      {currentWeather?.name} |
      {weather?.description} |
      {currentWeather?.main?.temp} &deg;C
      <Image
        width={90}
        height={90}
        src={`https://openweathermap.org/img/wn/${weather?.icon}@2x.png`}
        alt={weather?.main || ""}
      />
    </div>
  );
}

export default ClientView;
