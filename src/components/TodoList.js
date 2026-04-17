import React from "react";

function TodoList(props) {
  return (
    <li className={`list-item ${props.completed ? "completed" : ""}`}>
      <div className="task-content">
        <span className="task-text">{props.item}</span>
        {props.time && <span className="task-time">⏰ {props.time}</span>}
      </div>
      <span
        onClick={() => props.toggleComplete(props.index)}
        className="task-text"
      >
        {props.item}
      </span>

      <span className="icons">
        <i
          className="fa-solid fa-check icon-complete"
          onClick={() => props.toggleComplete(props.index)}
        ></i>

        <i
          className="fa-regular fa-trash-can icon-delete"
          onClick={() => props.deleteTask(props.index)}
        ></i>
      </span>
    </li>
  );
}

export default TodoList;
