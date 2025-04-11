import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text.trim());
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">Ajouter une tâche</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-[300px]">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border p-2 rounded"
          placeholder="Ma nouvelle tâche..."
        />
        <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Ajouter
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
