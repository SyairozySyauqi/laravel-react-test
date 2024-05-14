export default function Button() {
    const handleClick = (e) => (e.target.textContent = "OUCH");

    return (
        <>
            <button
                onDoubleClick={(e) => handleClick(e)}
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded "
            >
                Click me
            </button>
        </>
    );
}
