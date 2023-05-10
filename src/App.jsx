import { useLoaderData } from "react-router-dom";
import "./App.css";
import { FaCoffee } from "react-icons/fa";
import CoffeeCard from "./components/CoffeeCard";

function App() {
  const allCoffee = useLoaderData();
  console.log(allCoffee);
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <p>--- Sip & Savor ---</p>
        <h1
          style={{ fontFamily: "Rancho" }}
          className="text-5xl text-black text-center"
        >
          Our Popular Products
        </h1>
        <button
          className="flex items-center justify-center border px-2 py-1 rounded gap-1 mt-3 text-lg text-white"
          style={{
            fontFamily: "Rancho",
            backgroundColor: "#E3B577",
            border: "2px solid black",
          }}
        >
          Add Coffee <FaCoffee />
        </button>
      </div>
      <div className="m-20 grid md:grid-cols-2 gap-4">
        {allCoffee.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
        ))}
      </div>
    </>
  );
}

export default App;
