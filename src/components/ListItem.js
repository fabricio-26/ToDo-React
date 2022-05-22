import React from "react";
import Card from "./Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

function DoneImg(props) {
  if (props.done) {
    return <img alt="done" src="./assets/tickk.png"></img>;
  } else {
    return <img alt="undone" src="./assets/stop.png"></img>;
  }
}

function ListItem(props) {
  return (
  <li>
    <Card className={props.item.done ? "done item" : "item"}> {props.item.text}
      <div>
        <br></br>
        <input 
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
          onClick={() => {props.onDone(props.item);}}>
        </input>

        <button type="button"
          class="btn btn-default"
          aria-label="Left Align"
          onClick={() => {props.onDone(props.item);}}>
          <FontAwesomeIcon icon={faTrashCan} size="2x"/>
        </button>
      </div>
    </Card>
  </li>
  )
}

export default ListItem;