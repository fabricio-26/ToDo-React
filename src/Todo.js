/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import './Todo.css'

function Todo() {

  const[text, setText] = useState('')
  const[items, setItems] = useState([])

  function handleChange(event) {
    let texto = event.target.value;
    setText(texto);
  }

  function addItem(event){
    if(text) {
      event.preventDefault();
      setItems([...items, text])
      setText("")
    }
  }

  return(
    <>
      <div className="container">
        <h1>ToDo</h1>

        <form>
          <input onChange={handleChange} type='text' value={text}></input>
          <button onClick={addItem}>Add</button>
        </form>

        <ul>
         {items.map(item => <li key={item} >{item}</li>)}
        </ul>
      </div>
    </>
  )
}

export default Todo;