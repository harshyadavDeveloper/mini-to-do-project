import React, { useState } from "react";

function Search(props) {
  const [inputText, setInputText] = useState("");
  const [hour, setHour] = useState("12");
  const [minute, setMinute] = useState("00");
  const [period, setPeriod] = useState("AM");

 const handleAdd = () => {
  if (inputText.trim() === "") return;

  const formattedTime = `${hour}:${minute} ${period}`;

  // console.log("Adding:", inputText, formattedTime); // 👈 ADD THIS

  props.addList({
    text: inputText,
    time: formattedTime,
  });

  setInputText("");
};

  const hours = Array.from({ length: 12 }, (_, i) =>
    String(i + 1).padStart(2, "0")
  );

  const minutes = Array.from({ length: 60 }, (_, i) =>
    String(i).padStart(2, "0")
  );

  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="✨ Add a task..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />

      {/* Time Picker */}
      <div className="custom-time-picker">
        <select value={hour} onChange={(e) => setHour(e.target.value)}>
          {hours.map((h) => (
            <option key={h}>{h}</option>
          ))}
        </select>

        <span>:</span>

        <select value={minute} onChange={(e) => setMinute(e.target.value)}>
          {minutes.map((m) => (
            <option key={m}>{m}</option>
          ))}
        </select>

        <select value={period} onChange={(e) => setPeriod(e.target.value)}>
          <option>AM</option>
          <option>PM</option>
        </select>
      </div>

      <button onClick={handleAdd} className="add-btn">
        +
      </button>
    </div>
  );
}

export default Search;