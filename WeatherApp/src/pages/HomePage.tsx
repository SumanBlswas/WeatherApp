import Navbar2 from "../components/Navbar2";
import WeatherReport from "../components/WeatherReport";

const HomePage = () => {
  return (
    <div className={"h-full"}>
      <Navbar2 />
      <WeatherReport />
    </div>
  );
};

export default HomePage;
