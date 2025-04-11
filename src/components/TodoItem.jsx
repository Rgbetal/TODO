const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <div
      className={`flex justify-between items-center border p-4 rounded-lg w-[300px] ${
        todo.done ? "border-blue-500" : "border-gray-200"
      }`}
    >
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => onToggle(todo.id)}
          className="text-blue-600"
        />
        <span className={`${todo.done ? "line-through text-gray-400" : ""}`}>
          {todo.text}
        </span>
      </label>
      <button
        onClick={() => onDelete(todo.id)}
        className="text-gray-400 hover:text-red-500 text-xl"
      >
        ×
      </button>
    </div>
  );
};

export default TodoItem;
