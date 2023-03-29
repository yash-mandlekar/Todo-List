import React, { useState } from "react";
import "./App.css";

const TodoList = () => {
  const [list, setList] = useState("");
  const [item, setItem] = useState([
    { task: "Learn React", isCompleted: false },
    { task: "Learn Node", isCompleted: false },
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
