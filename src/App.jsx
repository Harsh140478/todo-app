import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todo.trim() === "") {
      return;
    }

    setTodos([...todos, todo]);
    setTodo("");
  };

  const deleteTodo = (indexToDelete) => {
    const updatedTodos = todos.filter(
      (_, index) => index !== indexToDelete
    );

    setTodos(updatedTodos);
  };

  return (
    <div className="todo-container">
      <h1>Todo App</h1>

      <div className="input-container">
        <input
          type="text"
          placeholder="Enter a todo"
          value={todo}
          onChange={(event) => setTodo(event.target.value)}
        />

        <button onClick={addTodo}>Add</button>
      </div>

      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            <span>{item}</span>

            <button
              className="delete-btn"
              onClick={() => deleteTodo(index)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;