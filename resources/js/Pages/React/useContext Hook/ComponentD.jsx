import { useContext } from "react";
import { UserContext } from "./ComponentA";

export default function ComponentD() {
    const user = useContext(UserContext);

    return (
        <div className="border-2 border-black text-h1 p-6">
            <h1>ComponentD</h1>
            <h3 className="text-h3">Bye {user}</h3>
        </div>
    );
}
