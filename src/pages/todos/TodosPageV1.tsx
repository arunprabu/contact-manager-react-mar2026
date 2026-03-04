import { useState } from "react";

interface ITodo {
  id: number;
  text: string;
  completed: boolean;
}

const TodosPageV1 = () => {
  const [todos, setTodos] = useState<ITodo[]>([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Learn TypeScript", completed: false },
  ]);

  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() === "") return;

    const newTodoItem: ITodo = {
      id: Date.now(),
      text: newTodo,
      completed: false,
    };

    setTodos([...todos, newTodoItem]);
    setNewTodo("");
  };

  return (
    <div>
      <h1>List of Todos</h1>

      <div className="mb-4">
        <input
          // type="text"
          placeholder="Enter a new todo"
          className="border border-gray-300 rounded px-3 py-2 mr-2"
          value={newTodo}
          onChange={(event: any) => {
            setNewTodo(event.target.value);
          }}
        />

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleAddTodo}
        >
          Add Todo
        </button>
      </div>

      {/* List of todos with feature to mark it as completed and an option to edit and delete. all inline */}
      <ul className="max-w-md">
        {todos.map((todo: ITodo) => (
          <li key={todo.id} className="flex items-center mb-2">
            <input type="checkbox" className="mr-2" />
            <span
              className={`flex-1 ${
                todo.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {todo.text}
            </span>
            <button className="bg-green-500 text-white px-2 py-1 rounded mr-2">
              Edit
            </button>
            <button className="bg-red-500 text-white px-2 py-1 rounded">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodosPageV1;
