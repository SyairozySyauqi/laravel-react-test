import { createContext, useState } from "react";
import ComponentB from "./ComponentB";

export const UserContext = createContext();

export default function ComponentA() {
    const [user, setUser] = useState("MSS");

    return (
        <div className="border-2 border-black text-h1 p-6">
            <h1>ComponentA</h1>
            <h3 className="text-h3">Hello {user}</h3>
            <UserContext.Provider value={user} /* useContext */>
                <ComponentB user={user} /* good old props */ />
            </UserContext.Provider>
        </div>
    );
}
