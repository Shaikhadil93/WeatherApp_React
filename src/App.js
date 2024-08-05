import "./App.css";
import TopButton from "./components/TopButton";
import Inputs from "./components/Inputs";
import TimeAndLocaion from "./components/TimeAndLocaion";
import TempAndDetails from "./components/TempAndDetails";
import Forcast from "./components/Forcast";
import getFormattedWeatherData from "./components/WeatherService";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function App() {
  const [query, setQuery] = useState({ q: "london" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState();

  const getWeather = async () => {


    const cityName = query.q ? query.q : "current Location";
    toast.info(`Fetching weather data for ${capitalizeFirstLetter(cityName)}`);

  await getFormattedWeatherData({ ...query, units }).then(
      (data) => {
        toast.success(`Fetched weather data for ${data.name},${data.country}`);
        console.log(data);
        setWeather(data);
      }
    );
  };

  useEffect(() => {
    getWeather();
  }, [query, units]);

  const formateBackground = () => {
    if (!weather) return "from-cyan-600 to-blue-700" ;
    const threshold = units==='metric'? 20: 60;
    if(weather.temp <= threshold) return "from-cyan-600 to-blue-700";
    return "from-yellow-600 to-orange-700";
  };

  return (
    <div className={`mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-gray-400 ${formateBackground()}`}>
      {weather && (
        <>
          <TopButton setQuery={setQuery} />
          <Inputs setQuery={setQuery} setUnits={setUnits} />
          <TimeAndLocaion weather={weather} />
          <TempAndDetails weather={weather} units={units} />
          <Forcast title="3 houre step Forecast" data={weather.hourly} />
          <Forcast title="daily Forecast" data={weather.daily} />
        </>
      )}

      <ToastContainer autoClose={2500} hideProgressBar={true} theme="colored"/>
    </div>
  );
}

export default App;
