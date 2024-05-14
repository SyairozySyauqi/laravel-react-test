export default function ProfilePicture() {
    const imageUrl =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpk4SD85WSqlAyKgUvN6FW4nS4Y1RYAkH8sDecL3TtCae7dpqQ56ZIsBHyEDfpUFLWRDc&usqp=CAU";
    const handleClick = (e) => (e.target.style.display = "none");

    return (
        <img
            onClick={(e) => handleClick(e)}
            src={imageUrl}
            alt="Profile Picture"
        />
    );
}
