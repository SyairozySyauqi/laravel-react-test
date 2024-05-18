// import PropTypes from "prop-types";

export default function UserGreeting({
    isLoggedIn = false,
    username = "Guest",
}) {
    const welcomeMessage = (
        <p className="text-2xl bg-green-500 text-white font-serif font-bold p-3 rounded-lg m-0">
            Welcome {username}
        </p>
    );
    const loginPrompt = (
        <p className="text-2xl bg-red-400 text-white font-serif p-3 rounded-lg m-0">
            Please login to continue
        </p>
    );

    return isLoggedIn ? welcomeMessage : loginPrompt;
}
UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
};
