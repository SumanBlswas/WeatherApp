import { BsCloudSun, BsUmbrella } from "react-icons/bs";
import { MdAir } from "react-icons/md";
import { FaTemperatureHigh } from "react-icons/fa";
import air from "/Air.gif";
import empire from "/Empire.gif";
import rain from "/Rain.gif";
import Bar from "./Chart";
import Spline from "./Spline";

import { useState } from "react";

const WeatherReport = () => {
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

  return (
    <div>
      <div className={"flex justify-between mt-10"}>
        <div
          className="bg-center bg-cover p-11 flex flex-col gap-10 rounded-xl button-30"
          style={{ backgroundImage: `url(${empire})` }}
        >
          <div className={"flex items-center gap-5"}>
            <div
              className={"text-red-400 text-2xl bg-white w-10 rounded-full p-2"}
            >
              <BsCloudSun />
            </div>
            <div className={"text-black"}>
              <h3 className={"font-bold text-lg"}>Weather</h3>
              <h5 className={"font-semibold"}>What's the weather.</h5>
            </div>
          </div>
          <div className={"flex gap-7 place-items-start"}>
            <div className={"flex flex-col gap-3"}>
              <h2 className={"text-5xl font-bold"}>22 C</h2>
              <h3 className={"font-semibold"}>Party Cloudy</h3>
            </div>
            <div className={"bg-white p-[10px] pt-1 pb-1 mt-3 rounded-lg"}>
              <h5 className={"font-bold"}>11 C</h5>
            </div>
          </div>
          <div className={"flex gap-4 text-center"}>
            <div className={"p-5 pr-7 pl-7 bg-black rounded-xl"}>
              <h5 className={"text-gray-400 font-semibold text-sm"}>Presure</h5>
              <h3 className={"text-2xl font-semibold text-white"}>800mb</h3>
            </div>
            <div className={"p-5 pr-7 pl-7 bg-green-300 rounded-xl"}>
              <h5 className={"text-black font-semibold text-sm"}>Visibility</h5>
              <h3 className={"text-2xl font-semibold text-black"}>4.3 km</h3>
            </div>
            <div className={"p-5 pr-7 pl-7 bg-white rounded-xl"}>
              <h5 className={"text-black font-semibold text-sm"}>Humadity</h5>
              <h3 className={"text-2xl font-semibold text-black"}>87%</h3>
            </div>
          </div>
        </div>
        <div
          className="bg-center bg-cover p-11 flex flex-col gap-10 rounded-xl button-30"
          style={{ backgroundImage: `url(${air})` }}
        >
          <div className={"flex items-center gap-5"}>
            <div
              className={"text-red-400 text-2xl bg-white w-10 rounded-full p-2"}
            >
              <MdAir />
            </div>
            <div className={"text-black"}>
              <h3 className={"font-bold text-lg"}>Air Quality</h3>
              <h5 className={"font-semibold"}>Main pollutan: PM 2.5</h5>
            </div>
          </div>
          <div className={"flex gap-7 place-items-start"}>
            <div className={"flex flex-col gap-3"}>
              <h2 className={"text-5xl font-bold text-red-500"}>390</h2>
              <h3 className={"font-semibold text-white"}>West Wind</h3>
            </div>
            <div className={"bg-cyan-300 p-[10px] pt-1 pb-1 mt-3 rounded-lg"}>
              <h5 className={"font-bold"}>AQI</h5>
            </div>
          </div>
          <div className={"flex bg-white rounded-xl p-5"}>
            <div className={"flex gap-[68px] place-items-end"}>
              <h3 className={"font-semibold font-serif"}>Good</h3>
              <h3
                className={
                  "font-semibold font-serif bg-black text-white p-3 rounded-xl"
                }
              >
                Standard
              </h3>
              <h3 className={"font-semibold font-serif"}>Hazardous</h3>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className={"mt-5 flex justify-between gap-10"}>
        <div className={"flex flex-col justify-between w-8/12 gap-10"}>
          <div className={"flex justify-between "}>
            <div>
              <h2 className={"text-3xl font-bold"}>How's the</h2>
              <h2 className={"text-3xl font-bold"}>temperature today?</h2>
            </div>
            <div className={"flex justify-between gap-2"}>
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
          <div className={"flex justify-between h-full"}>
            <div className={"flex justify-center items-center"}>
              <Bar />
            </div>
            <div className={"flex justify-center items-center"}>
              <Spline />
            </div>
          </div>
        </div>
        <div
          className="bg-center bg-cover p-8 flex flex-col gap-[130px] rounded-xl button-30 w-4/12"
          style={{ backgroundImage: `url(${rain})` }}
        >
          <div className={"flex flex-col gap-3"}>
            <h3 className={"font-bold text-xs"}>Tomorrow</h3>
            <h5 className={"font-bold text-2xl text-white"}>Alam Barazah</h5>
          </div>
          <div className={"flex gap-5 place-items-start"}>
            <div className={"flex flex-col gap-3 text-center"}>
              <h2
                className={
                  "text-4xl font-bold p-3 pt-1 pb-1 bg-gray-200 rounded-lg"
                }
              >
                22 C
              </h2>
              <h3
                className={"font-semibold p-3 pt-1 pb-1 bg-red-100 rounded-md"}
              >
                Rainny
              </h3>
            </div>
            <div
              className={
                "bg-cyan-300 p-[10px] pt-[2px] pb-[2px] mt-3 rounded-md"
              }
            >
              <h5 className={"font-bold"}>11 C</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherReport;
