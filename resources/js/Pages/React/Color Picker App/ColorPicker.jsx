import { useState } from "react";

export default function ColorPicker() {
    const [color, setColor] = useState("#ffffff");

    function handleColorChange(event) {
        setColor(event.target.value);
    }

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-h1 font-bold m-12">Color Picker</h1>
            <div
                className="w-72 h-72 flex items-center justify-center border-4 border-white/50 rounded-3xl mb-6 transition-all"
                style={{ backgroundColor: color }}
            >
                <p className="text-3xl text-center">Selected color: {color}</p>
            </div>
            <label htmlFor="color" className="font-bold text-lg mb-2">
                Select a color:
            </label>
            <input
                type="color"
                value={color}
                onChange={handleColorChange}
                id="color"
                className="w-16 h-12 p-1 rounded-md border-2 border-black/20"
            />
        </div>
    );
}
