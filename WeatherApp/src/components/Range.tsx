import { useState } from "react";

const AirQualityRange = ({ weather }: { weather: any }) => {
  const [value, setValue] = useState(weather && weather[0].aqi);
  console.log(value);

  const handleChange = (e: any) => {
    setValue(parseInt(e.target.value));
  };

  return (
    <div className="flex flex-col items-center">
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={handleChange}
        className="w-full h-2 hidden bg-gray-300 rounded-md appearance-none focus:outline-none focus:bg-blue-200"
        style={{ width: "100%" }}
      />
      <div className="justify-between w-full hidden">
        <span className="font-semibold font-serif">Good</span>
        <span className="font-semibold font-serif">Standard</span>
        <span className="font-semibold font-serif">Hazardous</span>
      </div>
      <div className="w-full h-2 bg-gray-300 rounded-md mt-2">
        <div
          className={`h-full rounded-md ${
            weather && weather[0].aqi <= 25
              ? "bg-green-400"
              : value <= 50
              ? "bg-yellow-400"
              : value <= 75
              ? "bg-orange-400"
              : "bg-red-400"
          }`}
          style={{ width: `${weather && weather[0].aqi}%` }}
        ></div>
      </div>
      <div className="mt-2 hidden">
        Air Quality Index: <span className="font-bold">{value}</span>
      </div>
    </div>
  );
};

export default AirQualityRange;
