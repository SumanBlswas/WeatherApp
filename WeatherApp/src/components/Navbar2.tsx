import user from "/user.jpeg";
import { BiSearchAlt2, BiCurrentLocation } from "react-icons/bi";
import search from "/Search.gif";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { getAPiWeather } from "../redux/weather/weather.action";
interface Navbar2Props {
  setTargetPlace: CallableFunction;
}

const Navbar2: React.FC<Navbar2Props> = ({ setTargetPlace }) => {
  const [place, setPlace] = useState("");
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const dispatch = useAppDispatch();

  const weather = useAppSelector(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (store: any) => store.weatherReducer?.place
  );

  useEffect(() => {
    dispatch(getAPiWeather(`/forecast/hourly?lat=${lat}&lon=${long}`));
  }, [dispatch, lat, long]);

  const handleSearch = () => {
    setTargetPlace(place);
    localStorage.setItem("place", place);
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLat(latitude);
          setLong(longitude);
          setTargetPlace(weather);
          localStorage.setItem("place", weather);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

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
            value={place}
            maxLength={12}
            placeholder="Search location..."
            style={{ backgroundImage: `url(${search})` }}
            onChange={(e) => setPlace(e.target.value)}
            className="p-3 pr-5 pl-5 rounded-lg font-bold text-black button-search bg-cover"
          />
          <div className="text-yellow-700 text-2xl relative bottom-9 left-[85%]">
            <div className="cursor-pointer w-1" onClick={() => handleSearch()}>
              <BiSearchAlt2 />
            </div>
          </div>
        </div>
        <div
          className="text-2xl relative z-99 w-10 h-10 mt-1 text-yellow-700 rounded-full border border-gray-200 flex items-center justify-center cursor-pointer button-bell"
          style={{ backgroundImage: `url(${search})` }}
          onClick={() => getLocation()}
        >
          <BiCurrentLocation />
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
