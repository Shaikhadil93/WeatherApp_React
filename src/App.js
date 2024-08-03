import "./App.css";
import TopButton from "./components/TopButton";
import Inputs from "./components/Inputs";
import TimeAndLocaion from "./components/TimeAndLocaion";
import TempAndDetails from "./components/TempAndDetails";
import Forcast from "./components/Forcast";

function App() {
  return (
    <div className="mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-gray-400 from-cyan-600 tbl-700">
      <TopButton />
      <Inputs />
      <TimeAndLocaion />
      <TempAndDetails />
      <Forcast />
      <Forcast />
    </div>
  );
}

export default App;
