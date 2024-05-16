import { useEffect, useState } from "react";

export default function DigitalClock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    function formatTime() {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(
            seconds
        )} ${meridiem}`;
    }

    function padZero(number) {
        return (number < 10 ? "0" : "") + number;
    }

    return (
        <div className=" bg-gradient-to-r from-sky-500 to-indigo-500 flex justify-center min-h-screen items-center center">
            <div className="text-center flex">
                <span className="text-white text-8xl font-bold w-full py-4 backdrop-blur-3xl">
                    {formatTime()}
                </span>
            </div>
        </div>
    );
}
