import { useState } from "react";

export default function MyComponent() {
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar(event) {
        const newCar = { year: carYear, make: carMake, model: carModel };

        if (newCar.make == "" || newCar.model == "") {
            alert("Car maker or model must be filled out");
        } else {
            setCars((c) => [...c, newCar]);
        }

        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }
    function handleRemoveCar(index) {
        setCars((c) => c.filter((_, i) => i !== index));
    }
    function handleYearChange(event) {
        setCarYear(event.target.value);
    }
    function handleMakeChange(event) {
        setCarMake(event.target.value);
    }
    function handleModelChange(event) {
        setCarModel(event.target.value);
    }

    return (
        <>
            <h2 className="text-h2">List of Car Objects</h2>
            <ul className="list-disc list-inside">
                {cars.map((car, index) => (
                    <li key={index} onClick={() => handleRemoveCar(index)}>
                        {car.year} {car.make} {car.model}
                    </li>
                ))}
            </ul>
            <input type="number" value={carYear} onChange={handleYearChange} />
            <br />
            <input
                type="text"
                value={carMake}
                placeholder="Enter car maker"
                onChange={handleMakeChange}
            />
            <br />
            <input
                type="text"
                value={carModel}
                placeholder="Enter car model"
                onChange={handleModelChange}
            />
            <br />
            <button
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded "
                onClick={handleAddCar}
            >
                Add Car
            </button>
        </>
    );
}
