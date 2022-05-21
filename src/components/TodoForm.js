import React, { useState } from "react";

function TodoForm(props) {
  const [text, setText] = useState("");

  function handleChange(event) {
    let texto = event.target.value;
    setText(texto);
  }

  function addItem(event) {
    if (text) {
      event.preventDefault();
      //setItems([...items, text]);
      props.onAddItem(text);
      setText("");
    }
  }


  return (
    <form>
      <input onChange={handleChange} type="text" value={text}></input>
      <button onClick={addItem}>Add</button>
    </form>
  );
}

export default TodoForm;