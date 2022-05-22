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
      <div class="form-group">
        <label for="exampleInputEmail1">Insira uma nota aqui</label>
        <br></br>
        <input onChange={handleChange} type="text" value={text} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
        {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
        <br></br>
        <button onClick={addItem} class="btn btn-primary">Add...</button>
        <br></br>
        <br></br>
      </div>
    </form>
  );
}

export default TodoForm;