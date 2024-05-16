import { useState } from "react";

export default function ToDoList() {
    const [tasks, setTasks] = useState(["Eat breakfast", "Take a shower"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }
    function addTask() {
        if (newTask !== "") {
            setTasks((t) => [...t, newTask]);
            setNewTask("");
        }
    }
    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }
    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [
                updatedTasks[index - 1],
                updatedTasks[index],
            ];
            setTasks(updatedTasks);
        }
    }
    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [
                updatedTasks[index + 1],
                updatedTasks[index],
            ];
            setTasks(updatedTasks);
        }
    }

    return (
        <div className="text-center mt-24 flex flex-col items-center">
            <h1 className="text-h1 font-bold mb-14">To-Do-List</h1>

            <div className="flex justify-center mb-4 gap-4">
                <input
                    type="text"
                    placeholder="Enter a task..."
                    value={newTask}
                    onChange={handleInputChange}
                    className="rounded border-black/20 w-60"
                />
                <button
                    onClick={addTask}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Add Task
                </button>
            </div>

            <ol className="list-none list-inside w-3/4">
                {tasks.map((task, index) => (
                    <li
                        key={index}
                        className="text-xl font-bold px-4 py-3 mb-3 border-black/20 border-2 rounded-md flex items-center justify-center bg-blue-300"
                    >
                        <span className="flex-1">{task}</span>
                        <button
                            onClick={() => deleteTask(index)}
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded mx-1 text-base"
                        >
                            Delete
                        </button>
                        <button
                            onClick={() => moveTaskUp(index)}
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded mx-1 text-base"
                        >
                            Up
                        </button>
                        <button
                            onClick={() => moveTaskDown(index)}
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded mx-1 text-base"
                        >
                            Down
                        </button>
                    </li>
                ))}
            </ol>
        </div>
    );
}
