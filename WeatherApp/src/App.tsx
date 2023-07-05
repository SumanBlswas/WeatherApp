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
      <div className={"flex place-items-center justify-between h-screen gap-3"}>
        <div className={"w-1/12 h-full"}>
          <Navbar />
        </div>
        <div className={"w-8/12 h-full mr-3"}>
          <HomePage setTargetPlace={setTargetPlace} targetPlace={targetPlace} />
        </div>
        <div className={"w-3/12 h-full"}>
          <Selection targetPlace={targetPlace} />
        </div>
      </div>
    </>
  );
}

export default App;
