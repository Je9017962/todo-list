import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([...todos, input]);
    setInput("");
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="app-bg">
      <div className="container">
        <h2>Todo List</h2>
        <div className="input-row">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a task"
          />
          <button onClick={addTodo}>Add</button>
        </div>
        <ol className="todo-list">
          {todos.map((todo, i) => (
            <li key={i}>
              <span>{todo}</span>
              <button className="remove-btn" onClick={() => removeTodo(i)}>
                X
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default App;
