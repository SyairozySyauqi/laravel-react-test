import List from "./List";
import List2 from "./List2";

export default function App() {
    const fruits = [
        { id: 1, name: "apple", calories: 95 },
        { id: 2, name: "orange", calories: 45 },
        { id: 3, name: "banana", calories: 105 },
        { id: 4, name: "coconut", calories: 155 },
        { id: 5, name: "pineapple", calories: 35 },
    ];

    const vegetables = [
        { id: 6, name: "potatoes", calories: 110 },
        { id: 7, name: "celery", calories: 15 },
        { id: 8, name: "carrot", calories: 25 },
        { id: 9, name: "corn", calories: 65 },
        { id: 10, name: "broccoli", calories: 55 },
    ];

    return (
        <>
            {fruits.length > 0 && <List2 items={fruits} category="Fruits" />}
            {vegetables.length > 0 && (
                <List2 items={vegetables} category="Vegetables" />
            )}
        </>
    );
}
