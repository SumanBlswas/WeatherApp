import Navbar2 from "../components/Navbar2";
import WeatherReport from "../components/WeatherReport";

const HomePage = ({
  setTargetPlace,
  targetPlace,
}: {
  setTargetPlace: CallableFunction;
  targetPlace: string;
}) => {
  return (
    <div className={"h-full"}>
      <Navbar2 setTargetPlace={setTargetPlace} />
      <WeatherReport targetPlace={targetPlace} />
    </div>
  );
};

export default HomePage;
