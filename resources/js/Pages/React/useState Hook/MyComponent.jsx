import { useState } from "react";

export default function MyComponent() {
    const [name, setName] = useState("Guest"); // Initial value
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("Spongebob");
    };
    const incrementAge = () => {
        setAge(age + 1);
    };
    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    };

    return (
        <>
            <div>
                <p>Name: {name}</p>
                <button
                    onClick={updateName}
                    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                >
                    Set Name
                </button>

                <p>Age: {age}</p>
                <button
                    onClick={incrementAge}
                    class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                >
                    Increment Age
                </button>

                <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
                <button
                    onClick={toggleEmployedStatus}
                    class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                >
                    Toggle Status
                </button>
            </div>
        </>
    );
}
