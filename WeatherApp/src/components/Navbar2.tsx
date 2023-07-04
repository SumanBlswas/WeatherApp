import user from "/user.jpeg";
import { BiSearchAlt2 } from "react-icons/bi";
import { PiBellRingingLight } from "react-icons/pi";
import search from "/Search.gif";

const Navbar2 = () => {
  return (
    <div className={"flex justify-between place-items-center"}>
      <div className={"flex text-left gap-5 place-items-center mt-5"}>
        <div className="w-20 h-20 overflow-hidden rounded-full button-search">
          <img
            src={user}
            alt="user"
            className="rounded-full scale-[1.45] mt-2"
          />
        </div>
        <div>
          <h4 className={"text-xl font-medium"}>Hello,</h4>
          <h3 className={"font-semibold text-2xl"}>Suman Biswas</h3>
        </div>
      </div>
      <div className="flex gap-5">
        <div>
          <input
            type="text"
            maxLength={12}
            placeholder="Search anything..."
            style={{ backgroundImage: `url(${search})` }}
            className="p-3 pr-5 pl-5 rounded-lg font-bold text-black button-search bg-cover"
          />
          <div className="text-yellow-700 text-2xl relative bottom-9 left-[85%]">
            <div className="cursor-pointer w-1">
              <BiSearchAlt2 />
            </div>
          </div>
        </div>
        <div
          className="text-2xl relative z-99 w-10 h-10 mt-1 rounded-full border border-gray-200 flex items-center justify-center cursor-pointer button-bell"
          style={{ backgroundImage: `url(${search})` }}
        >
          <PiBellRingingLight />
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
