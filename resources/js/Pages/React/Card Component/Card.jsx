export default function Card() {
    return (
        <>
            <div className="border-2 border-black/20 shadow-md shadow-black/90 rounded-xl p-5 m-2.5 text-center max-w-64 items-center flex-col inline-flex">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpk4SD85WSqlAyKgUvN6FW4nS4Y1RYAkH8sDecL3TtCae7dpqQ56ZIsBHyEDfpUFLWRDc&usqp=CAU"
                    alt="Profile Picture"
                    className="max-w-60 h-auto rounded-full mb-3"
                />
                <h2 className="m-0 h-auto text-black/80 text-h2">A</h2>
                <p className="text-p text-black/70">B</p>
            </div>
        </>
    );
}
