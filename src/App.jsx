import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import TodoList from "./pages/TodoList";
import AddTodo from "./pages/AddTodo";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Don't worry", done: false },
    { id: 2, text: "Be happy", done: false },
  ]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, done: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <TodoList
              todos={todos}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          }
        />
        <Route path="/add" element={<AddTodo addTodo={addTodo} />} />
      </Routes>
    </Router>
  );
};

export default App;
