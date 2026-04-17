import React from "react";

function DateDisplay() {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="date">
      <h3>📅 {today}</h3>
    </div>
  );
}

export default DateDisplay;