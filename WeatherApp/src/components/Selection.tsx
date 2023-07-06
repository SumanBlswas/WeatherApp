import { BsFillSunFill } from "react-icons/bs";
import { LuCalendarCheck2 } from "react-icons/lu";
import sunrise from "/Sunrise.jpeg";
import mooncloud from "/MoonCloud.png";
import uvnight from "/UV-Night.gif";
import card from "/Sun.gif";
import cloud from "/Cloud.png";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { getAPiWeather } from "../redux/weather/weather.action";
import moment from "moment-timezone";

const Selection = ({ targetPlace }: { targetPlace: string }) => {
  const dispatch = useAppDispatch();

  const weather = useAppSelector(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (store: any) => store.weatherReducer?.weather[`current?city=${targetPlace}`]
  );

  const weather2 = useAppSelector(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (store: any) =>
      store.weatherReducer?.weather[`daily?city=${targetPlace}&days=3`]
  );

  useEffect(() => {
    dispatch(getAPiWeather(`/forecast/daily?city=${targetPlace}&days=3`));
    dispatch(getAPiWeather(`/current?city=${targetPlace}`));
  }, [dispatch, targetPlace]);

  const utcTimeNow = (sunstate: []) => {
    const utcTime = `${weather[0]?.datetime.split(":")[0]} ${sunstate}`;
    const localTime = moment.utc(utcTime).local();
    const hour = localTime.format("HH");
    const minute = localTime.format("mm");
    const time =
      (Number(hour) > 12 ? `0${Number(hour) - 12}` : hour) + ":" + minute;
    return time;
  };

  const uvIndex = (uvIndex: number) => {
    if (uvIndex < 3) {
      return "Low";
    } else if (uvIndex > 2 && uvIndex < 6) {
      return "Moderate";
    } else if (uvIndex > 5 && uvIndex < 8) {
      return "High";
    } else if (uvIndex > 7 && uvIndex < 11) {
      return "Very High";
    } else if (uvIndex > 10) {
      return "Extreme";
    }
  };

  const day = () => {
    const day = new Date().toUTCString();
    return day;
  };

  return (
    <div className={"h-full bg-gray-100 flex flex-col justify-around"}>
      <div className={"flex justify-around mt-5 pb-5 border-b border-gray-400"}>
        <div>
          <h2 className={"text-xl font-bold"}>{day().split(",")[0]}</h2>
          <h4 className={"text-lg font-semibold"}>
            {weather && weather[0]?.city_name},{" "}
            {weather && weather[0]?.country_code === "IN"
              ? "India"
              : weather && weather[0]?.country_code}
          </h4>
        </div>
        <div>
          <h1 className={"text-4xl font-bold text-orange-600"}>
            {weather && weather[0]?.temp}°C
          </h1>
        </div>
      </div>
      <div className={"p-5 flex flex-col justify-between h-full"}>
        <div>
          <div>
            <img src={sunrise} alt="sunrise" />
          </div>
          <div className={"flex justify-between text-center"}>
            <div>
              <h3 className={"font-bold text-lg"}>Sunrise</h3>
              <h4 className={"text-lg"}>
                {weather && utcTimeNow(weather[0]?.sunrise)} am
              </h4>
            </div>
            <div>
              <div className={"font-bold text-lg"}>Sunset</div>
              <div className={"text-lg"}>
                {weather && utcTimeNow(weather[0]?.sunset)} pm
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            "p-5 md:p-2 md:pl-5 md:pr-5 rounded-2xl flex justify-between items-center button-30"
          }
          style={{ backgroundImage: `url(${uvnight})` }}
        >
          <div className={"text-orange-400 text-5xl"}>
            <BsFillSunFill />
          </div>
          <div className={"text-white flex flex-col justify-between gap-4"}>
            <div className={"flex gap-5 text-center items-center"}>
              <div>
                <h3 className={"text-2xl font-bold"}>
                  {Number(weather && weather[0]?.uv).toFixed(2)} UVI
                </h3>
              </div>
              <div
                className={`${
                  uvIndex(weather && weather[0]?.uv) === ("Low" || "moderate")
                    ? "bg-lime-300 text-black"
                    : "bg-red-600 text-white"
                } text-center p-3 pt-1 pb-1 rounded-xl`}
              >
                <h4 className={"text-sm font-semibold"}>
                  {uvIndex(weather && weather[0]?.uv)}
                </h4>
              </div>
            </div>
            <div>
              <h5 className={"text-lg text-gray-300"}>
                {uvIndex(weather && weather[0]?.uv)} risk of from UV rays
              </h5>
            </div>
          </div>
        </div>
        <div className={"flex flex-col gap-7"}>
          <div>
            <h1 className={"text-3xl font-bold"}>Weather Prediction</h1>
          </div>
          <div className={"flex flex-col gap-3"}>
            <div
              className={
                "p-2 bg-white rounded-xl flex justify-between gap-4 pr-5 pl-3 card bg-current"
              }
              style={{ backgroundImage: `url(${card})` }}
            >
              <div>
                <img
                  src={
                    weather2 &&
                    weather2[1]?.weather["description"]
                      .toLowerCase()
                      .split(" ")
                      .some((sentence: string) => sentence.includes("rain"))
                      ? cloud
                      : mooncloud
                  }
                  alt="day2"
                  className="w-20"
                />
              </div>
              <div className={"flex flex-col w-full justify-around"}>
                <div>
                  <h3 className={"text-gray-600 font-medium text-sm"}>
                    {weather2 && weather2[1].valid_date}
                  </h3>
                </div>
                <div className={"flex justify-between"}>
                  <div>
                    <h2 className={"font-bold text-lg"}>
                      {weather2 &&
                      weather2[1].weather["description"].split(" ").length > 1
                        ? weather2 &&
                          weather2[1].weather["description"].split(" ")[0]
                        : weather2 && weather2[1].weather["description"]}
                    </h2>
                  </div>
                  <div className={"text-end"}>
                    <h2 className={"text-gray-700 text-xl font-bold"}>
                      {weather2 && Math.round(Number(weather2[1]?.max_temp))}° /{" "}
                      {weather2 && Math.round(Number(weather2[1]?.min_temp))}°
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={
                "p-2 bg-white rounded-xl flex justify-between gap-4 pr-5 pl-3 card bg-cover"
              }
              style={{ backgroundImage: `url(${card})` }}
            >
              <div>
                <img
                  src={
                    weather2 &&
                    weather2[2]?.weather["description"]
                      .toLowerCase()
                      .split(" ")
                      .some((sentence: string) => sentence.includes("rain"))
                      ? cloud
                      : mooncloud
                  }
                  alt="day3"
                  className="w-20"
                />
              </div>
              <div className={"flex flex-col w-full justify-around"}>
                <div>
                  <h3 className={"text-gray-600 font-medium text-sm"}>
                    {weather2 && weather2[2].valid_date}
                  </h3>
                </div>
                <div className={"flex justify-between"}>
                  <div>
                    <h2 className={"font-bold text-lg"}>
                      {weather2 &&
                      weather2[2].weather["description"].split(" ").length > 1
                        ? weather2 &&
                          weather2[2].weather["description"].split(" ")[0]
                        : weather2 && weather2[2].weather["description"]}
                    </h2>
                  </div>
                  <div className={"text-end"}>
                    <h2 className={"text-gray-700 text-xl font-bold"}>
                      {weather2 && Math.round(Number(weather2[2]?.max_temp))}° /{" "}
                      {weather2 && Math.round(Number(weather2[2]?.min_temp))}°
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={"flex justify-end"}>
          <button
            className={
              "flex justify-around place-items-center pb-5 pt-5 p-8 bg-orange-500 rounded-xl text-white text-base gap-5 font-medium button"
            }
          >
            <div className={"text-xl"}>
              <LuCalendarCheck2 />
            </div>
            <div>
              <h5>Next 5 Days</h5>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Selection;
