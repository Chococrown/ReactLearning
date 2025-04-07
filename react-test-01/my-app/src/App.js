import React, {useState} from 'react'

import './App.css';

import TodoList from './todoList';

function App() {

  const [todoList, setTodoList] = useState(["todo"])
  const [text, setText] = useState("")

  const onTextChange = ({target: {value}}) => {
    setText(value)
  }

  const addTask = () => {
    if (text.trim() === "") return; // ไม่เพิ่มถ้าเป็นค่าว่าง
    setTodoList([...todoList, text]);
    setText(""); // ล้าง input หลังเพิ่ม
  };

  return (
    <div className="App">

      <input 
        type="text" 
        value={text} 
        onChange={ onTextChange } />

      <button onClick={addTask}>Add task</button>

    <div>
      <TodoList todoList = {todoList} />
    </div>

      
    </div>
  );
}

export default App;
