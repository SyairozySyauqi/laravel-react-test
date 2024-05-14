export default function Button() {
    let count = 0;

    const handleClick = (name) => {
        if (count < 10) {
            count++;
            console.log(`${name}, you clicked me ${count} times`);
        } else {
            console.log(`${name}, stop clicking me`);
        }
    };

    return (
        <>
            <button
                onClick={() => handleClick("Bro")}
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded "
            >
                Click me
            </button>
        </>
    );
}
