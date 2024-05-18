// import PropTypes from "prop-types";

export default function List2({ items = [], category = "Category" }) {
    const itemList = items;
    const itemCategory = category;

    const listItems = itemList.map((item) => (
        <li
            key={item.id}
            className="text-h5 text-center hover:cursor-pointer hover:text-red-400"
        >
            {item.name}: <b className="font-bold">{item.calories}</b>
        </li>
    ));

    return (
        <>
            <h3 className="text-h3 font-bold text-center mb-3 border-black border-2 rounded bg-blue-300">
                {itemCategory}
            </h3>
            <ul className="mb-5">{listItems}</ul>
        </>
    );
}
List2.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            calories: PropTypes.number,
        })
    ),
};
