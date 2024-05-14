import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };
    const reset = () => {
        setCount(0);
    };

    return (
        <div className="text-center">
            <p className="text-8xl mb-7">{count}</p>
            <button
                className="border border-transparent w-36 h-12 rounded-lg shadow-md shadow-black/70 text-2xl font-bold mx-1 bg-blue-700 text-white"
                onClick={decrement}
            >
                Decrement
            </button>
            <button
                className="border border-transparent w-36 h-12 rounded-lg shadow-md shadow-black/70 text-2xl font-bold mx-1 bg-blue-700 text-white"
                onClick={reset}
            >
                Reset
            </button>
            <button
                className="border border-transparent w-36 h-12 rounded-lg shadow-md shadow-black/70 text-2xl font-bold mx-1 bg-blue-700 text-white"
                onClick={increment}
            >
                Increment
            </button>
        </div>
    );
}
