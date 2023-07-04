import { TiWeatherWindyCloudy } from "react-icons/ti";
import { IoBarChart } from "react-icons/io5";
import { PiTelevisionDuotone } from "react-icons/pi";
import { TbLocationFilled } from "react-icons/tb";
import { LuCalendarCheck2 } from "react-icons/lu";
import { RiSettings6Line } from "react-icons/ri";
import { LiaDoorOpenSolid } from "react-icons/lia";

import { useState } from "react";

const Navbar = () => {
  const [items, setItems] = useState([
    { icon: <IoBarChart />, isClicked: true },
    { icon: <PiTelevisionDuotone />, isClicked: false },
    { icon: <TbLocationFilled />, isClicked: false },
    { icon: <LuCalendarCheck2 />, isClicked: false },
    { icon: <RiSettings6Line />, isClicked: false },
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
    <div className="flex flex-col justify-between h-full pb-10">
      <div className="flex justify-between flex-col gap-[60px] mt-5">
        <div className="text-3xl text-red-600 flex flex-col place-items-center">
          <TiWeatherWindyCloudy />
          <p className="font-black text-sm">Wetheroo...</p>
        </div>
        <div className="flex justify-between flex-col gap-[30px]">
          {items.map((item, index) => (
            <div
              key={index}
              className={`text-2xl flex place-items-center flex-col`}
            >
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
      <div className="text-4xl flex place-items-center flex-col">
        <div className="hover:custom-box-shadow p-2">
          <LiaDoorOpenSolid />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
