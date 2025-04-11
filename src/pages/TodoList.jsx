import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoItem from "../components/TodoItem";
import FilterBar from "../components/FilterBar";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  const [filter, setFilter] = useState("all");
  const navigate = useNavigate();

  const filteredTodos = todos.filter((todo) =>
    filter === "all" ? true : filter === "active" ? !todo.done : todo.done
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <button
        className="text-3xl bg-blue-600 text-white w-12 h-12 rounded-full"
        onClick={() => navigate("/add")}
      >
        +
      </button>

      <FilterBar filter={filter} setFilter={setFilter} />

      {filteredTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
      ))}

      <button className="text-3xl text-white bg-blue-600 w-12 h-12 rounded-full">
        🗑️
      </button>
    </div>
  );
};

export default TodoList;
