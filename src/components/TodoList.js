import React from "react";

function TodoList(props) {
  return (
    <li className={`list-item ${props.completed ? "completed" : ""}`}>
      <div className="task-content">
        <span className="task-text">{props.item}</span>
        {props.time && <span className="task-time">⏰ {props.time}</span>}
      </div>

      <div className="icons">
        <i
          className="fa-solid fa-check icon-complete"
          onClick={() => props.toggleComplete(props.index)}
        ></i>

        <i
          className="fa-regular fa-trash-can icon-delete"
          onClick={() => props.deleteTask(props.index)}
        ></i>
      </div>
    </li>
  );
}

export default TodoList;