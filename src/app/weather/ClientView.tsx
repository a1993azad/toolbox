"use client";

import { IWeatherClientViewProps } from "@models/IWeather";
import { useRouter } from "next/navigation";
import React, { Suspense, useDeferredValue } from "react";
import { getCurrentLocation } from "@utils/location";
import WeatherResult from "./WeatherResult";
import Loading from "@components/Loading";
import { ApolloProvider } from '@apollo/client'
import client from "@graphql/weather/apollo-client"

function ClientView(props: IWeatherClientViewProps) {
  const { error, currentWeather, query } = props;
  const [locationError, setLocationError] = React.useState<null | string>(null);
  const loaded = useDeferredValue(
    !!error || !!currentWeather || !!locationError
  );
  const { push } = useRouter();
  let weather;
  if (currentWeather?.weather) {
    [weather] = currentWeather?.weather;
  }

  const initLocation = React.useCallback(async () => {
    try {
      if (query?.latitude && query?.longitude) {
        return;
      }
      const {
        coords: { latitude, longitude },
      } = await getCurrentLocation();
      push(`/weather?latitude=${latitude}&longitude=${longitude}`);
    } catch (error) {
      if (error) {
        const { message } = error as Error;

        setLocationError(message);
      }
    }
  }, [query, push]);

  React.useEffect(() => {
    initLocation();
  }, [initLocation]);
  return (
    <> <ApolloProvider client={client}>
      <Suspense fallback={<Loading />}>
        <WeatherResult
          loaded={loaded}
          weather={weather}
          currentWeather={currentWeather}
          error={error || locationError}
        />
      </Suspense>
      </ApolloProvider>
    </>
  );
}

export default ClientView;
