import { TiWeatherWindyCloudy } from "react-icons/ti";
import { IoBarChart, IoMenu } from "react-icons/io5";
import { PiTelevisionDuotone } from "react-icons/pi";
import { TbLocationFilled } from "react-icons/tb";
import { LuCalendarCheck2 } from "react-icons/lu";
import { RiSettings6Line } from "react-icons/ri";
import { LiaDoorOpenSolid } from "react-icons/lia";
import { GiCrossedBones } from "react-icons/gi";
import { useState } from "react";

const Navbar = () => {
  const [items, setItems] = useState([
    { icon: <IoBarChart />, isClicked: true },
    { icon: <PiTelevisionDuotone />, isClicked: false },
    { icon: <TbLocationFilled />, isClicked: false },
    { icon: <LuCalendarCheck2 />, isClicked: false },
    { icon: <RiSettings6Line />, isClicked: false },
  ]);

  const [showMenu, setShowMenu] = useState(false);

  const handleClick = (index: number) => {
    const updatedItems = items.map((item, i) => {
      if (i === index) {
        return { ...item, isClicked: true };
      }
      return { ...item, isClicked: false };
    });
    setItems(updatedItems);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex flex-col justify-between h-full pb-4">
      <div className="hidden md:flex justify-between flex-col gap-[60px] mt-5">
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
      <div className="hidden text-4xl md:flex place-items-center flex-col">
        <div className="hover:custom-box-shadow p-2">
          <LiaDoorOpenSolid />
        </div>
      </div>
      {/* Mobile Menu */}
      {/* <div className="md:hidden fixed top-0 left-0 w-full bg-white z-10">
        <div className="flex justify-between items-center p-4">
          <div>
            <TiWeatherWindyCloudy className="text-3xl text-red-600" />
          </div>
          <div className="cursor-pointer" onClick={toggleMenu}>
            {showMenu ? (
              <LiaDoorOpenSolid className="text-3xl text-black" />
            ) : (
              <IoMenu className="text-3xl text-black" />
            )}
          </div>
        </div>
        {showMenu && (
          <div className="px-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex items-center py-2 hover:bg-gray-200 cursor-pointer"
              >
                <div className="mr-2">{item.icon}</div>
                <div>
                  {item.isClicked ? <strong>{item.icon}</strong> : item.icon}
                </div>
              </div>
            ))}
          </div>
        )}
      </div> */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-white z-10">
        <div className="flex justify-between items-center p-4">
          <div>
            <TiWeatherWindyCloudy className="text-3xl text-red-600" />
          </div>
          <div className="cursor-pointer" onClick={toggleMenu}>
            {showMenu ? (
              <GiCrossedBones className="text-2xl text-black" />
            ) : (
              <IoMenu className="text-3xl text-black" />
            )}
          </div>
        </div>
        {showMenu && (
          <div className="px-4 flex justify-around mb-2">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex items-center py-2 hover:bg-gray-200 cursor-pointer"
              >
                <div className="mr-2">{item.icon}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
