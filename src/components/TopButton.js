function TopButton() {
  const cities = [
    {
      id: 1,
      name: "Mumbai",
    },
    {
      id: 2,
      name: "Delhi",
    },
    {
      id: 3,
      name: "Banglore",
    },
    {
      id: 4,
      name: "Ahemdabad",
    },
    {
      id: 5,
      name: "Ajmer",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {/* create three button from array of object  */}
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-lg font-medium hover:bg-gray-700/20 px-3 py-3 rounded-md transition ease-out"
        >
          {city.name}
        </button>
      ))}
    </div>
  );
}

export default TopButton;
