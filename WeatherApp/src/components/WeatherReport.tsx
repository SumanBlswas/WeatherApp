import { BsCloudSun, BsUmbrella } from "react-icons/bs";
import { MdAir } from "react-icons/md";
import { FaTemperatureHigh } from "react-icons/fa";
import air from "/Air.gif";
import empire from "/Empire.gif";
import rain from "/Rain.gif";
import Bar from "./Chart";
import Spline from "./Spline";
import search from "/Search.gif";

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { getAPiWeather } from "../redux/weather/weather.action";
import AirQualityRange from "./Range";

const WeatherReport = ({ targetPlace }: { targetPlace: string }) => {
  const [items, setItems] = useState([
    { icon: <FaTemperatureHigh />, isClicked: true },
    { icon: <BsUmbrella />, isClicked: false },
    { icon: <MdAir />, isClicked: false },
  ]);

  const handleClick = (index: number) => {
    const updatedItems = items.map((item, i) => {
      if (i === index) {
        return { ...item, isClicked: true };
      }
      return { ...item, isClicked: false };
    });
    setItems(updatedItems);
  };

  const dispatch = useAppDispatch();

  const weather = useAppSelector(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (store: any) => store.weatherReducer?.weather[`current?city=${targetPlace}`]
  );

  const weather2 = useAppSelector(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (store: any) =>
      store.weatherReducer?.weather[`daily?city=${targetPlace}&days=2`]
  );

  const airpolutan = useAppSelector(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (store: any) =>
      store.weatherReducer?.weather[`airquality?city=${targetPlace}`]
  );

  useEffect(() => {
    dispatch(getAPiWeather(`/forecast/daily?city=${targetPlace}&days=2`));
    dispatch(getAPiWeather(`/current?city=${targetPlace}`));
    dispatch(getAPiWeather(`/current/airquality?city=${targetPlace}`));
  }, [dispatch, targetPlace]);

  return (
    <div className="mx-auto gap-2 md:gap-0 px-4 flex flex-col h-full justify-around">
      <div className="flex flex-col sm:flex-row mt-10 md:gap-0 gap-5">
        <div
          className="bg-center bg-cover p-5 md:p-5 md:pl-11 md:pr-11 flex flex-col gap-10 rounded-xl button-30 sm:mr-10 sm:w-1/2 md:place-items-start"
          style={{ backgroundImage: `url(${empire})` }}
        >
          <div className="flex items-center gap-5 justify-between md:justify-start">
            <div className="text-red-400 text-2xl bg-white w-10 rounded-full p-2">
              <BsCloudSun />
            </div>
            <div className="text-black">
              <h3 className="font-bold text-lg">Weather</h3>
              <h5 className="font-semibold">What's the weather.</h5>
            </div>
          </div>
          <div className="flex flex-row gap-7 place-items-start">
            <div className="flex flex-col gap-3">
              <h2 className="text-5xl font-bold">
                {weather && weather[0]?.temp}°C
              </h2>
              <h3 className="font-semibold">
                {weather && weather[0]?.weather?.description}
              </h3>
            </div>
            <div className="bg-white p-[10px] pt-1 pb-1 mt-3 rounded-lg">
              <h5 className="font-bold">
                {Math.round(Number(weather && weather[0]?.dewpt))}°C
              </h5>
            </div>
          </div>
          <div className="flex gap-4 text-center justify-center md:justify-between">
            <div className="md:p-2 md:pr-7 md:pl-7 bg-black rounded-xl p-2 pl-2 pr-2">
              <h5 className="text-gray-400 font-semibold text-sm">Pressure</h5>
              <h3 className="text-2xl font-semibold text-white">
                {Math.round(Number(weather && weather[0]?.pres))}mb
              </h3>
            </div>
            <div className="md:p-2 md:pr-7 md:pl-7 bg-green-300 rounded-xl p-2 pl-2 pr-2">
              <h5 className="text-black font-semibold text-sm">Visibility</h5>
              <h3 className="text-2xl font-semibold text-black">
                {weather && weather[0]?.vis} km
              </h3>
            </div>
            <div className="md:p-2 md:pr-7 md:pl-7 bg-white rounded-xl p-2 pl-2 pr-2">
              <h5 className="text-black font-semibold text-sm">Humidity</h5>
              <h3 className="text-2xl font-semibold text-black">
                {weather && weather[0]?.rh}%
              </h3>
            </div>
          </div>
        </div>
        <div
          className="bg-center bg-cover md:p-5 md:pl-8 md:pr-8 p-5 flex flex-col gap-10 rounded-xl button-30 sm:w-1/2"
          style={{ backgroundImage: `url(${air})` }}
        >
          <div className="flex items-center gap-5 justify-between md:justify-start">
            <div className="text-red-400 text-2xl bg-white w-10 rounded-full p-2">
              <MdAir />
            </div>
            <div className="text-black">
              <h3 className="font-bold text-lg">Air Quality</h3>
              <h5 className="font-semibold hidden md:block">
                Main pollutant:{" "}
                {airpolutan && airpolutan[0].pm10 > airpolutan[0].pm25
                  ? "PM 10"
                  : "PM 2.5"}
              </h5>
              <h5 className="font-semibold block md:hidden">
                {airpolutan && airpolutan[0].pm10 > airpolutan[0].pm25
                  ? "PM 10"
                  : "PM 2.5"}
              </h5>
            </div>
          </div>
          <div className="flex place-items-start jjustify-center md:justify-start">
            <div className="flex flex-col gap-3">
              <h2 className="text-5xl font-bold text-red-500">
                {weather && weather[0]?.aqi}
              </h2>
              <h3 className="font-semibold text-white">
                {weather &&
                  weather[0]?.wind_cdir_full[0].toUpperCase() +
                    weather[0]?.wind_cdir_full.slice(1)}{" "}
                Wind
              </h3>
            </div>
            <div className="bg-cyan-300 p-[10px] pt-1 pb-1 mt-3 rounded-lg">
              <h5 className="font-bold">AQI</h5>
            </div>
          </div>
          <div className="flex bg-white rounded-xl p-5 flex-col">
            <div className="hidden md:flex gap-[80px] place-items-end">
              <h3
                className={`font-semibold font-serif ${
                  weather && weather[0].aqi < 26
                    ? "bg-black text-white p-1 rounded-xl"
                    : ""
                }`}
              >
                Good
              </h3>
              <h3
                className={`font-semibold font-serif ${
                  weather && weather[0].aqi < 76 && weather[0].aqi > 25
                    ? "bg-black text-white p-1 pl-2 pr-2 rounded-xl font-medium"
                    : ""
                }`}
              >
                Standard
              </h3>
              <h3
                className={`font-semibold font-serif ${
                  weather && weather[0].aqi > 75
                    ? "bg-black text-white p-1 pl-2 pr-2 rounded-xl font-medium"
                    : ""
                }`}
              >
                Hazardous
              </h3>
            </div>
            <div>
              <AirQualityRange weather={weather} />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 flex flex-col sm:flex-row justify-between gap-10">
        <div className="flex flex-col justify-between w-full sm:w-8/12 gap-10">
          <div className="flex justify-center md:justify-between">
            <div className="hidden md:block">
              <h2 className="text-3xl font-bold">How's the</h2>
              <h2 className="text-3xl font-bold">temperature today?</h2>
            </div>
            <div className="flex justify-between gap-2">
              {items.map((item, index) => (
                <div key={index} className={`text-2xl flex flex-col`}>
                  <div
                    className={`hover:custom-box-shadow p-3 ${
                      item.isClicked ? "clicked-box-shadow" : ""
                    }`}
                    onClick={() => handleClick(index)}
                  >
                    {item.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between gap-5 h-full md:gap-0">
            <div className="flex justify-center items-center sm:w-1/2">
              <Bar targetPlace={targetPlace} />
            </div>
            <div className="flex justify-center items-center sm:w-1/2">
              <Spline targetPlace={targetPlace} />
            </div>
          </div>
        </div>
        <div
          className="bg-center bg-cover p-5 md:pl-8 md:pr-8 mb-5 md:mb-0 flex flex-col gap-[70px] rounded-xl button-30 w-full sm:w-4/12"
          style={{
            backgroundImage: `url(${
              weather2 &&
              weather2[1]?.weather["description"]
                .toLowerCase()
                .split(" ")
                .some((sentence: string) => sentence.includes("rain"))
                ? rain
                : search
            })`,
          }}
        >
          <div className="flex flex-col gap-3 mb-4">
            <h3 className="font-bold text-xs">Tomorrow</h3>
            <h5
              className={`font-bold text-2xl ${
                weather2 &&
                weather2[1]?.weather["description"]
                  .toLowerCase()
                  .split(" ")
                  .some((sentence: string) => sentence.includes("rain"))
                  ? "text-white"
                  : "text-black"
              }`}
            >
              {weather && weather[0]?.city_name}
            </h5>
          </div>
          <div className="flex gap-5 place-items-start">
            <div className="flex flex-col gap-3 text-center">
              <h2 className="text-4xl font-bold p-3 pt-1 pb-1 bg-gray-200 rounded-lg">
                {weather2 && weather2[1].temp}°C
              </h2>
              <h3 className="font-semibold p-3 pt-1 pb-1 bg-red-100 rounded-md">
                {weather2 &&
                weather2[1].weather["description"].split(" ").length > 1
                  ? weather2 && weather2[1].weather["description"].split(" ")[0]
                  : weather2 && weather2[1].weather["description"]}
              </h3>
            </div>
            <div className="bg-cyan-300 p-[10px] pt-1 pb-1 mt-3 rounded-lg">
              <h5 className="font-bold">
                {weather2 && Math.round(Number(weather2[1].min_temp))}°C
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherReport;
