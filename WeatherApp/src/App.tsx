import "./App.css";
import Navbar from "./components/Navbar";
import Selection from "./components/Selection";
import HomePage from "./pages/HomePage";
import { useState } from "react";

function App() {
  const place = localStorage.getItem("place");
  const [targetPlace, setTargetPlace] = useState(
    `${place === null ? "Kolkata" : place}`
  );

  return (
    <>
      <div
        className={
          "flex flex-col sm:flex-row place-items-center justify-between sm:justify-around h-full md:h-screen gap-3 mt-5 md:mt-0"
        }
      >
        <div className="md:block md:w-1/12 md:h-full">
          <Navbar />
        </div>
        <div className={"md:w-8/12 h-full mr-0 md:mr-3 md:h-full"}>
          <HomePage setTargetPlace={setTargetPlace} targetPlace={targetPlace} />
        </div>
        <div className={"hidden md:block md:w-3/12 md:h-full"}>
          <Selection targetPlace={targetPlace} />
        </div>
      </div>
    </>
  );
}

export default App;
