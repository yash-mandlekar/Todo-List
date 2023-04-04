import React, { useState } from "react";
import "./App.css";

const TodoList = () => {
  const [list, setList] = useState("");
  const [item, setItem] = useState([
    { task: "A", isCompleted: false },
    { task: "B", isCompleted: false },
    { task: "C", isCompleted: false },
    { task: "D", isCompleted: false },
    { task: "E", isCompleted: false },
    { task: "F", isCompleted: false },
    { task: "G", isCompleted: false },
    { task: "H", isCompleted: false },
    { task: "I", isCompleted: false },
    { task: "J", isCompleted: false },
    { task: "K", isCompleted: false },
    { task: "L", isCompleted: false },
    { task: "M", isCompleted: false },
    { task: "N", isCompleted: false },
    { task: "O", isCompleted: false },
    { task: "P", isCompleted: false },
    { task: "Q", isCompleted: false },
    { task: "R", isCompleted: false },
    { task: "S", isCompleted: false },
    { task: "T", isCompleted: false },
    { task: "U", isCompleted: false },
    { task: "V", isCompleted: false },
    { task: "W", isCompleted: false },
    { task: "X", isCompleted: false },
    { task: "Y", isCompleted: false },
    { task: "Z", isCompleted: false },
  ]);
  const addItem = (e) => {
    e.preventDefault();
    if (list) {
      setItem([...item, { task: list, isCompleted: false }]);
      setList("");
    }
  };
  const deleteItem = (id) => {
    const deleteSingle = item.filter((elem, i) => {
      return i !== id;
    });
    setItem(deleteSingle);
  };
  const handleCheckbox = (id) => {
    const check = item.map((elem, i) => {
      if (i === id) {
        return { ...elem, isCompleted: !elem.isCompleted };
      }
      return elem;
    });
    setItem(check);
  };
  return (
    <div className="taskcnt">
      <div className="task">
        <div className="header">{item.length} Tasks</div>
        <div className="todos">
          {item.map((elem, i) => (
            <div className={`todo ${i % 2 === 0 ? "grey" : ""}`} key={i}>
              <input
                type="checkbox"
                onChange={() => handleCheckbox(i)}
                checked={elem.isCompleted}
              />
              <p>
                {elem.isCompleted ? (
                  <strike>
                    {i + 1}. {elem.task}
                  </strike>
                ) : (
                  i + 1 + ". " + elem.task
                )}
              </p>
              <button
                onClick={() => deleteItem(i)}
                type="button"
                className="btn"
              >
                delete
              </button>
            </div>
          ))}
        </div>
        <form onSubmit={addItem} className="footer">
          <input
            value={list}
            onChange={(e) => setList(e.target.value)}
            type="text"
            id="floatingPassword"
            placeholder="Add Todo..."
          />
          <button type="submit" className="addbtn">
            +
          </button>
        </form>
      </div>
    </div>
  );
};

export default TodoList;
