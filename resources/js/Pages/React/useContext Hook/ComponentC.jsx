import { useContext } from "react";
import ComponentD from "./ComponentD";
import { UserContext } from "./ComponentA";

export default function ComponentC() {
    const user = useContext(UserContext);

    return (
        <div className="border-2 border-black text-h1 p-6">
            <h1>ComponentC</h1>
            <h3 className="text-h3">Hello again {user}</h3>
            <ComponentD />
        </div>
    );
}
