import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (
  <div className="buttons">
    {tasks.length > 0 && (
      <>
        <button className="section__buttons">
          {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
      </button>
        <button className="section__buttons"
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
      </button>
      </>
    )}
  </div>
);

export default Buttons;