import { useState } from "react";
import { BiSearch, BiCurrentLocation } from "react-icons/bi";
export default function Inputs({setQuery,setUnits}) {
  
  const[city,setCity] = useState(" ");
  const handleSearchClick =  ()=>{
    if(city !== ' ')setQuery({q:city});
  }

  const handleLocationClick = () => {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position) => {
        const {latitude,logitude} =position.coord
        setQuery({lat: latitude,lon:logitude});
      })
    }
  }
  
  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4 ">
        <input
          value={city}
          onChange={(e)=>setCity(e.currentTarget.value)}
          type="text"
          placeholder="search by city... "
          className="text-gray-500 text-xl font-light p-2 w-full shadow-xl focus:outline-non capitalize placeholder:lowercase"
        />

        <BiSearch
          size={30}
          className="cursor-pointer transition ease-out hover:scale-125"
          onClick={handleSearchClick}
        />
        <BiCurrentLocation
          size={30}
          className="cursor-pointer transition ease-out hover:scale-125"
          onClick={handleLocationClick}
        />
      </div>
      <div className="flex flex-row w-3/4 items-center justify-center space-x-2">
        <button className="text-2xl font-medium transition ease-out hover:scale-125" 
          onClick={()=>setUnits('metric')}
        >
          &deg;C
        </button>
        <p>|</p>
        <button className="text-2xl font-medium transition ease-out hover:scale-125" 
          onClick={()=>setUnits('imperial')}
        >
          &deg;F
        </button>
      </div>
    </div>
  );
}
