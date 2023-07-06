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
    <div className={"h-full flex flex-col justify-around pb-7 md:pb-6"}>
      <Navbar2 setTargetPlace={setTargetPlace} />
      <WeatherReport targetPlace={targetPlace} />
    </div>
  );
};

export default HomePage;
