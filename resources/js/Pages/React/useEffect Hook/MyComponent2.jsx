import { useEffect, useState } from "react";

export default function MyComponent() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("EVENT LISTENER ADDED");

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("EVENT LISTENER REMOVED");
        };
    }, []);

    useEffect(() => {
        document.title = `Size: ${width} x ${height}`;
    }, [width, height]);

    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    function substractCount() {
        setCount((c) => c - 1);
    }
    function changeColor() {
        setColor((c) => (c === "green" ? "red" : "green"));
    }

    return (
        <>
            <p>Window Width: {width}</p>
            <p>Window Height: {height}</p>
        </>
    );
}
