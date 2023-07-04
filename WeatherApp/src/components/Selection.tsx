import { BsFillSunFill } from "react-icons/bs";
import { LuCalendarCheck2 } from "react-icons/lu";
import sunrise from "/Sunrise.jpeg";
import mooncloud from "/MoonCloud.png";
import uvnight from "/UV-Night.gif";
import card from "/Sun.gif";
import cloud from "/Cloud.png";

const Selection = () => {
  return (
    <div
      className={
        "h-full bg-gray-100 flex flex-col justify-around"
      }
    >
      <div className={"flex justify-around mt-5 pb-5 border-b border-gray-400"}>
        <div>
          <h2 className={"text-xl font-bold"}>Sun</h2>
          <h4 className={"text-lg font-semibold"}>Kokata, India</h4>
        </div>
        <div>
          <h1 className={"text-4xl font-bold text-orange-600"}>22°C</h1>
        </div>
      </div>
      <div className={"p-5 flex flex-col justify-between h-full"}>
        <div>
          <div>
            <img src={sunrise} alt="sunrise" />
          </div>
          <div className={"flex justify-between text-center"}>
            <div>
              <h3 className={"font-bold text-lg"}>Sunset</h3>
              <h4 className={"text-lg"}>06:00 am</h4>
            </div>
            <div>
              <div className={"font-bold text-lg"}>Sunrise</div>
              <div className={"text-lg"}>06:45 am</div>
            </div>
          </div>
        </div>
        <div
          className={
            "p-5 rounded-2xl flex justify-between items-center button-30"
          }
          style={{ backgroundImage: `url(${uvnight})` }}
        >
          <div className={"text-orange-400 text-5xl"}>
            <BsFillSunFill />
          </div>
          <div className={"text-white flex flex-col justify-between gap-4"}>
            <div className={"flex gap-5 text-center items-center"}>
              <div>
                <h3 className={"text-2xl font-bold"}>20 UVI</h3>
              </div>
              <div
                className={"bg-lime-300 text-center p-3 pt-1 pb-1 rounded-xl"}
              >
                <h4 className={"text-sm text-black font-semibold"}>Moderate</h4>
              </div>
            </div>
            <div>
              <h5 className={"text-lg text-gray-300"}>
                Moderate risk of from UV rays
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
                <img src={cloud} alt="mooncloud" className={"w-20"} />
              </div>
              <div className={"flex flex-col w-full justify-around"}>
                <div>
                  <h3 className={"text-gray-600 font-medium text-sm"}>
                    November 10
                  </h3>
                </div>
                <div className={"flex justify-between"}>
                  <div>
                    <h2 className={"font-bold text-lg"}>Cloudy</h2>
                  </div>
                  <div className={"text-end"}>
                    <h2 className={"text-gray-700 text-xl font-bold"}>
                      26° / 19°
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
                <img src={mooncloud} alt="mooncloud" className={"w-20"} />
              </div>
              <div className={"flex flex-col w-full justify-around"}>
                <div>
                  <h3 className={"text-gray-600 font-medium text-sm"}>
                    November 11
                  </h3>
                </div>
                <div className={"flex justify-between"}>
                  <div>
                    <h2 className={"font-bold text-lg"}>Bright</h2>
                  </div>
                  <div className={"text-end"}>
                    <h2 className={"text-gray-700 text-xl font-bold"}>
                      26° / 20°
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
