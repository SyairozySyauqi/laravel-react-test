import { useState } from "react";

export default function MyComponent() {
    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

    function handleAddFood() {
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        if (newFood == "") {
            alert("Food must be filled out");
        } else {
            setFoods((f) => [...f, newFood]);
        }
    }
    function handleRemoveFood(index) {
        setFoods(foods.filter((_, i) => i !== index));
    }
    function handleModelChange(event) {
        setCar((c) => ({ ...c, model: event.target.value }));
    }

    return (
        <>
            <h2>List of Food</h2>
            <ul className="list-disc list-inside">
                {foods.map((food, index) => (
                    <li key={index} onClick={() => handleRemoveFood(index)}>
                        {food}
                    </li>
                ))}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter food name" />
            <button
                onClick={handleAddFood}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Add Food
            </button>
        </>
    );
}
