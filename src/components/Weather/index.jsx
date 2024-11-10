import React, { useEffect, useState } from "react";
import { fetchWeather } from "../../services/weatherApi";
import Loader from "../Loader";

export default function Weather() {
  const [weatherData, setWeatherData] = useState(null);

  const getTimeOnly = (datetimeStr) => {
    const date = new Date(datetimeStr);
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetchWeather({ city: "aklan" });
  //       setWeatherData(response);
  //       console.log("Weather Data:", response);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className=" absolute top-4 left-4 flex justify-center items-start gap-2">
      {weatherData ? (
        <>
          <div className=" p-2 flex flex-col gap-3 text-white rounded-xl">
            <p className="text-5xl font-sour-gummy">
              {weatherData.values.temperatureApparentAvg.toFixed(1)}&deg;C
            </p>
            <p className="font-sour-gummy">Bakhawan Eco Park</p>
            <div className="w-full flex flex-col gap-1">
              <div className="w-full h-[3px] bg-white rounded-full" />
              <div className="w-[80%] h-[3px] bg-white rounded-full" />
            </div>
          </div>
          <div className=" grid grid-cols-2 mt-1">
            <div className="p-2 flex flex-col text-white rounded-xl">
              <p className="text-[10px] font-sour-gummy">Humidity</p>
              <p className="font-semibold font-sour-gummy">
                {weatherData.values.humidityAvg}%
              </p>
            </div>
            <div className="p-2 flex flex-col text-white rounded-xl">
              <p className="text-[10px] font-sour-gummy">Wind</p>
              <p className="font-semibold font-sour-gummy">
                {weatherData.values.windSpeedAvg}m/s
              </p>
            </div>
            <div className="p-2 flex flex-col text-white rounded-xl">
              <p className="text-[10px] font-sour-gummy">Sunrise</p>
              <p className="font-semibold font-sour-gummy">
                {getTimeOnly(weatherData.values.sunriseTime)}
              </p>
            </div>
            <div className="p-2 flex flex-col text-white rounded-xl">
              <p className="text-[10px] font-sour-gummy">Sunset</p>
              <p className="font-semibold font-sour-gummy">
                {getTimeOnly(weatherData.values.sunsetTime)}
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className=" p-2 flex flex-col gap-3 text-white rounded-xl">
            <p className="text-5xl">
              <Loader />
            </p>
            <p className="font-sour-gummy">Bakhawan Eco Park</p>
            <div className="w-full flex flex-col gap-1">
              <div className="w-full h-[3px] bg-white rounded-full" />
              <div className="w-[80%] h-[3px] bg-white rounded-full" />
            </div>
          </div>
          <div className=" grid grid-cols-2 mt-1">
            <div className="p-2 flex flex-col text-white rounded-xl">
              <p className="text-[10px] font-sour-gummy">Humidity</p>
              <p className="font-semibold ">
                <Loader />
              </p>
            </div>
            <div className="p-2 flex flex-col text-white rounded-xl">
              <p className="text-[10px] font-sour-gummy">Wind</p>
              <p className="font-semibold ">
                <Loader />
              </p>
            </div>
            <div className="p-2 flex flex-col text-white rounded-xl">
              <p className="text-[10px] font-sour-gummy">Sunrise</p>
              <p className="font-semibold ">
                <Loader />
              </p>
            </div>
            <div className="p-2 flex flex-col text-white rounded-xl">
              <p className="text-[10px] font-sour-gummy">Sunset</p>
              <p className="font-semibold ">
                <Loader />
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
