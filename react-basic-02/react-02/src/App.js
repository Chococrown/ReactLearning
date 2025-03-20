import { useState } from "react";

import FormComponent from "./Components/FormComponent";

import Transaction from "./Components/Transaction";


function App() {

  const design1 = {color:"blue",textAlign:"center"}

  const [items,setItems] = useState([])

  const onAddNewItem = (newItem) =>{
      setItems((prevItem) =>{
      return [newItem,...prevItem]
    })
  }

  return (
    <div>

      <h1 style = {design1}>แอปคำนวนรายรับ - รายจ่าย</h1>

      <FormComponent onAddItem = {onAddNewItem} />

      <Transaction items = {items} />

    </div>
  );
}

export default App;
