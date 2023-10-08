import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import React from "react";
import { Accordion } from "react-daisyui";

function ForecastDataRecord({ data }: { data: any }) {
  const {
    weather = [],
    dt_txt,
    sys: { pod },
    main:{temp}
  } = data;
  const [weatherCondition] = weather;
  const isNight = pod === "n";
  const time=`${dt_txt}`.substring(10,16)
  return (
    <Accordion
      defaultChecked
      className={
        isNight
          ? "bg-black bg-opacity-50 glass text-white rounded-sm"
          : "bg-white bg-opacity-50 glass text-black rounded-sm"
      }
    >
      <Accordion.Title className="text-xl font-medium">
        <div className="flex flex-row items-center">
          <Image
            width={40}
            height={40}
            src={`https://openweathermap.org/img/wn/${weatherCondition?.icon}@2x.png`}
            alt={weatherCondition?.main || ""}
          />
          <h3 className="text-lg mx-2 flex flex-1 justify-between items-center">
            <b>{weatherCondition.description}</b>
            <small>{time}</small>
            </h3>
        </div>
      </Accordion.Title>
      <Accordion.Content>
        <p className="flex w-full my-2 items-center justify-start"><Icon icon="fluent:temperature-24-filled" fontSize={20}/><span className="px-1">{temp}&deg;C</span></p>
      </Accordion.Content>
    </Accordion>
    // <li className={isNight?"":"mb-2 mx-2 glass  rounded-md flex flex-row items-center"}>
    //   <Image
    //     width={40}
    //     height={40}
    //     src={`https://openweathermap.org/img/wn/${weatherCondition?.icon}@2x.png`}
    //     alt={weatherCondition?.main || ""}
    //   />
    //   <h3 className="text-lg mx-2">{weatherCondition.description}</h3>
    // </li>
  );
}
function ForecastData({ data }: { data: any }) {
  const { value } = data;

  return (
    <div className="flex flex-col bg-black p-2 flex-wrap gap-2 rounded-b-md">
      {value.map((item: any, i: number) => (
        <ForecastDataRecord data={item} key={i} />
      ))}
    </div>
  );
}

export default ForecastData;
