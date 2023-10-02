"use client";

import { IWeatherClientViewProps } from "@models/IWeather";
import { useRouter } from "next/navigation";
import React, { Suspense, useDeferredValue } from "react";
import { getCurrentLocation } from "@utils/location";
import WeatherResult from "./WeatherResult";
import Loading from "@components/Loading";

function ClientView(props: IWeatherClientViewProps) {
  const { error, currentWeather, query } = props;
  const loaded = useDeferredValue(!!error || !!currentWeather);
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
  return (
    <>
      <Suspense fallback={<Loading />}>
        <WeatherResult
          loaded={loaded}
          weather={weather}
          currentWeather={currentWeather}
          error={error}
        />
      </Suspense>
    </>
  );
}

export default ClientView;
