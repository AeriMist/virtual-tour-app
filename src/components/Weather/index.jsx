import React, { useEffect, useState } from "react";
import { fetchWeather } from "../../services/weatherApi";

export default function Weather() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchWeather({ city: "London" });
        setWeatherData(response);
        console.log("Weather Data:", response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className=" absolute top-4 left-4 flex justify-center items-start gap-2">
      {/* {weatherData ? (
        <>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Description: {weatherData.weather[0].description}</p>
          <p>Feels like : {weatherData.main.feels_like}°C</p>
          <p>Humidity : {weatherData.main.humidity}%</p>
          <p>Pressure : {weatherData.main.pressure}</p>
          <p>Wind Speed : {weatherData.wind.speed}m/s</p>
        </>
      ) : (
        <p>Loading weather data...</p>
      )} */}
      {weatherData ? (
        <>
          <div className=" p-2 flex flex-col gap-3 text-white rounded-xl">
            <p className="text-5xl">{weatherData.main.temp}</p>
            <p>Bakhawan Eco Park</p>
            <div className="w-full flex flex-col gap-1">
              <div className="w-full h-[3px] bg-white rounded-full" />
              <div className="w-[80%] h-[3px] bg-white rounded-full" />
            </div>
          </div>
          <div className=" grid grid-cols-2 mt-1">
            <div className="p-2 flex flex-col text-white rounded-xl">
              <p className="text-[10px]">Humidity</p>
              <p className="font-semibold">{weatherData.main.humidity}%</p>
            </div>
            <div className="p-2 flex flex-col text-white rounded-xl">
              <p className="text-[10px]">Wind</p>
              <p className="font-semibold">{weatherData.wind.speed}m/s</p>
            </div>
            <div className="p-2 flex flex-col text-white rounded-xl">
              <p className="text-[10px]">Sunrise</p>
              <p className="font-semibold">5:54 am</p>
            </div>
            <div className="p-2 flex flex-col text-white rounded-xl">
              <p className="text-[10px]">Sunset</p>
              <p className="font-semibold">6:26 pm</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className=" p-2 flex flex-col gap-3 text-white rounded-xl">
            <p className="text-5xl">25°</p>
            <p>Bakhawan Eco Park</p>
            <div className="w-full flex flex-col gap-1">
              <div className="w-full h-[3px] bg-white rounded-full" />
              <div className="w-[80%] h-[3px] bg-white rounded-full" />
            </div>
          </div>
          <div className=" grid grid-cols-2 mt-1">
            <div className="p-2 flex flex-col text-white rounded-xl">
              <p className="text-[10px]">Humidity</p>
              <p className="font-semibold">89%</p>
            </div>
            <div className="p-2 flex flex-col text-white rounded-xl">
              <p className="text-[10px]">Wind</p>
              <p className="font-semibold">1.87 m/s</p>
            </div>
            <div className="p-2 flex flex-col text-white rounded-xl">
              <p className="text-[10px]">Sunrise</p>
              <p className="font-semibold">5:54 am</p>
            </div>
            <div className="p-2 flex flex-col text-white rounded-xl">
              <p className="text-[10px]">Sunset</p>
              <p className="font-semibold">6:26 pm</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
