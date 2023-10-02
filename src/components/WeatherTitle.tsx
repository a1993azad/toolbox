import { Icon } from "@iconify/react";
import IWeatherTitleProps from "@models/IWeather";
import React from "react";

function WeatherTitle({ error, currentWeather }: IWeatherTitleProps) {
  return (
    <>
      {!!error ? (
        <div className="bg-red-800 text-red-200 p-2 text-center">{error}</div>
      ) : (
        <h2 className="mb-5 text-4xl font-bold text-gray-600 flex flex-row items-center truncate">
            <Icon icon="solar:map-point-wave-bold-duotone" className="me-2"/>
          {currentWeather?.name ? (
            currentWeather?.name
          ) : (
            <div className="text-sm">
              {`(${currentWeather?.coord?.lat},${currentWeather?.coord?.lon})`}
            </div>
          )}
        </h2>
      )}
    </>
  );
}

export default WeatherTitle;
