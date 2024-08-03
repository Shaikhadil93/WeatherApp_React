import{BiSearch,BiCurrentLocation} from "react-icons/bi"
export default function Inputs() {
  return (
    <div className="flex flex-row justify-center my-6">
        <div className="flex flex-row w-3/4 items-center justify-center space-x-4 ">
            <input type="text"
            placeholder="search by city... "
            className="text-gray-500 text-xl font-light p-2 w-full shadow-xl focus:outline-non capitalize placeholder:lowercase" />

            <BiSearch size={30} className="cursor-pointer transition ease-out hover:scale-125"/>
            <BiCurrentLocation size={30} className="cursor-pointer transition ease-out hover:scale-125"/>
        </div>
        <div className="flex flex-row w-3/4 items-center justify-center space-x-2">
            <button className="text-2xl font-medium transition ease-out hover:scale-125">&deg;C</button>
            <p>|</p>
            <button className="text-2xl font-medium transition ease-out hover:scale-125">&deg;F</button>

        </div>
    </div>
  )
}
