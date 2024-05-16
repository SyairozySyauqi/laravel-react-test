import { useEffect, useRef, useState } from "react";

export default function Stopwatch() {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if (isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            });
        }

        return () => {
            clearInterval(intervalIdRef.current);
        };
    }, [isRunning]);

    function start() {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }
    function stop() {
        setIsRunning(false);
    }
    function reset() {
        setElapsedTime(0);
        setIsRunning(false);
    }
    function formatTime() {
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
        let seconds = Math.floor((elapsedTime / 1000) % 60);
        let miliseconds = Math.floor((elapsedTime % 1000) / 10);

        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        miliseconds = String(miliseconds).padStart(2, "0");

        return `${minutes}:${seconds}:${miliseconds}`;
    }

    return (
        <div className="flex flex-col items-center mt-5">
            <div className="text-center border-black border-4 rounded-[30px] w-96 px-7 py-5">
                <div className="text-6xl font-bold mb-5">{formatTime()}</div>
                <div className="flex flex-row justify-center gap-2">
                    <button
                        onClick={start}
                        className="bg-green-500 hover:bg-green-700 text-white text-h6 font-bold py-1 px-6 rounded-md"
                    >
                        Start
                    </button>
                    <button
                        onClick={stop}
                        className="bg-red-500 hover:bg-red-700 text-white text-h6 font-bold py-1 px-6 rounded-md"
                    >
                        Stop
                    </button>
                    <button
                        onClick={reset}
                        className="bg-blue-500 hover:bg-blue-700 text-white text-h6 font-bold py-1 px-6 rounded-md"
                    >
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
}
