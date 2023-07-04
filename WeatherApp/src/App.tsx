import "./App.css";
import Navbar from "./components/Navbar";
import Selection from "./components/Selection";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <div className={"flex place-items-center justify-between h-screen gap-3"}>
        <div className={"w-1/12 h-full"}>
          <Navbar />
        </div>
        <div className={"w-8/12 h-full mr-3"}>
          <HomePage />
        </div>
        <div className={"w-3/12 h-full"}>
          <Selection />
        </div>
      </div>
    </>
  );
}

export default App;
