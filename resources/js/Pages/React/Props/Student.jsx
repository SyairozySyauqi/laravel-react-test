// import PropTypes from "prop-types";

export default function Student({
    name = "guest",
    age = 0,
    isStudent = false,
}) {
    return (
        <>
            <div className="text-2xl p-2 border-solid border-2 border-black/20">
                <p>Name: {name}</p>
                <p>Age: {age}</p>
                <p>Student: {isStudent ? "Yes" : "No"}</p>
            </div>
        </>
    );
}
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
};
