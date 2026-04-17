import React, { useState, useEffect } from "react";
import "./App.css";
import Search from "./components/Search";
import TodoList from "./components/TodoList";
import DateDisplay from "./components/Date";

function App() {
  const [listTodo, setListTodo] = useState([]);

  const addList = (task) => {
    setListTodo((prev) => [...prev, { ...task, completed: false }]);
  };

  const deleteTask = (index) => {
    const newList = listTodo.filter((_, i) => i !== index);
    setListTodo(newList);
  };

  const toggleComplete = (index) => {
    const newList = [...listTodo];
    newList[index].completed = !newList[index].completed;
    setListTodo(newList);
  };

  const clearAll = () => {
    setListTodo([]);
  };
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="main-container">
      <div className="center-container">
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
        <DateDisplay />

        <Search addList={addList} />

        <h1 className="app-heading">✨ My TODO</h1>

        <button className="clear-btn" onClick={clearAll}>
          Clear All
        </button>

        <hr />

        {listTodo.length === 0 ? (
          <p className="empty-state">No tasks yet 😴</p>
        ) : (
          listTodo.map((item, i) => (
            <TodoList
              key={i}
              item={item.text}
              time={item.time}
              completed={item.completed}
              deleteTask={deleteTask}
              toggleComplete={toggleComplete}
              index={i}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
