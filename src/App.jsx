import { useEffect, useState } from "react";

const App = () => {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    const getAllCoffee = async () => {
      const res = await fetch("http://localhost:5000/coffee");
      const data = await res.json();

      setCoffees(data);
    };

    getAllCoffee();
  }, []);

  console.log(coffees);

  return (
    <div className="container mx-auto">
      <h2 className="my-10 text-2xl font-semibold text-center">
        Coffee Houser Sei Addata Aaj Aar Nei
      </h2>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {coffees.map((coffee) => {
          return (
            <div key={coffee._id}>
              <img src={coffee.photo} alt="coffee" />
              <h2 className="mt-2 text-xl font-medium ">{coffee.name}</h2>
              <div className="flex items-center justify-between">
                <h3 className="text-lg">available coffee:{coffee.available}</h3>
                <p>{coffee.supplier}</p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <button className="px-10 py-2 text-white bg-blue-500 rounded-lg">
                  View
                </button>
                <button className="px-10 py-2 text-white bg-green-500 rounded-lg">
                  Edit
                </button>
                <button className="px-10 py-2 text-white bg-red-500 rounded-lg">
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
