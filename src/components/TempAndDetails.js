import { FaThermometerEmpty } from "react-icons/fa";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";


export default function TempAndDetails({weather:{
  temp,
  feels_like,
  humidity,
  temp_max,
  temp_min,
  sunrise,
  sunset,
  speed,
  details,
  icon
},units})  {
  const vreticlaDetails = [
    {
      id: 1,
      Icon: FaThermometerEmpty,
      title: "Real Feel",
      value: `${feels_like.toFixed()}`
    },
    {
      id: 2,
      Icon: BiSolidDropletHalf,
      title: "Humidity",
      value: `${humidity.toFixed()}%`
    },
    {
      id: 3,
      Icon: FiWind,
      title: "Wind",
      value: `${speed.toFixed()} ${units === 'metric' ? 'Km/h' : 'M/s'}`,
    },
  ];

  const hotirizontalDetails = [
    {
      id: 1,
      Icon: GiSunrise,
      title: "Sunrise",
      value: `${sunrise}`,
      
    },
    {
      id: 2,
      Icon: GiSunset,
      title: "Sunset",
      value: `${sunset}`,
    },
    {
      id: 3,
      Icon: MdKeyboardArrowUp,
      title: "High",
      value: `${temp_max.toFixed()}`,
    },
    {
      id: 4,
      Icon: MdKeyboardArrowDown,
      title: "Low",
      value: `${temp_min.toFixed()}`,
    }
  ];

  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-500">
        <p>{details}</p>
      </div>  

      <div className="flex flex-row items-center justify-between py-3">
        <img
          src={icon}
          alt="Weather Icon"  
          className="w-20"
        />
        <p className="text-4xl">{`${temp.toFixed()}`}</p>
        <div className="flex flex-col space-y-3 items-start">
          {vreticlaDetails.map(({ id, Icon, title, value }) => (
            <div
              key={id}
              className="flex font-light text-sm items-center justify-center"
            >
              < Icon size={18} className="mr-1" />
              {`${title}`} <span className="font-medium ml-1 ">{value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-10 py-3">
            {
              hotirizontalDetails.map(({id,Icon,value,title})=>(
                <div key={id} className="flex  flex-row items-center">
                  <Icon size={30}/>
                  <p className="font-light ml-1">
                    {`${title}:`}
                    <span className="font-medium ml-1">{value}</span>
                  </p>
                </div>
              ))}
      </div>
    </div>
  );
}
