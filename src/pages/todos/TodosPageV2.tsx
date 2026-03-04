import { useRef, useState } from "react";

interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

const TodosPageV2 = () => {
  const [todos, setTodos] = useState<ITodo[]>([
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Learn TypeScript", completed: false },
  ]);

  const newTodoRef = useRef<HTMLInputElement>(null);

  const handleAddTodo = () => {
    // lets read the value of the input
    console.log(newTodoRef?.current?.value);

    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        title: newTodoRef?.current?.value || "",
        completed: false,
      },
    ]);
  };

  return (
    <div>
      <h1>List of Todos</h1>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter a new todo"
          className="border border-gray-300 rounded px-3 py-2 mr-2"
          ref={newTodoRef}
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
              {todo.title}
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

export default TodosPageV2;
