import React, { useState } from "react";

function Search(props) {
  const [inputText, setInputText] = useState("");
  const [time, setTime] = useState("");

  const handleAdd = () => {
    if (inputText.trim() === "") return;

    props.addList({
      text: inputText,
      time: time,
    });

    setInputText("");
    setTime("");
  };

  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="✨ Add a task..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="time-input"
      />

      <button onClick={handleAdd} className="add-btn">
        +
      </button>
    </div>
  );
}

export default Search;
