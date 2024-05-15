import ComponentC from "./ComponentC";

export default function ComponentB({ user }) {
    return (
        <div className="border-2 border-black text-h1 p-6">
            <h1>ComponentB</h1>
            <h3 className="text-h3">Hello again {user}</h3>
            <ComponentC />
        </div>
    );
}
