import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {
  const [todoList, setTodoList] = useState([{ id: 1, text: "todo" }]);
  const [text, setText] = useState("");

  const onTextChange = ({ target: { value } }) => {
    setText(value);
  };

  const addTask = () => {
    if (text.trim() === "") return;
    setTodoList([...todoList, { id: Date.now(), text }]);
    setText("");
  };

  return (
    <div className="App">
      <input
        type="text"
        value={text}
        onChange={onTextChange}
      />
      <button onClick={addTask}>Add task</button>
      <div>
        <TodoList todoList={todoList} />
      </div>
    </div>
  );
}

export default App;