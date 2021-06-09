import "./style.css";

const Tasks = ({ tasks, hideDone }) => (
  <ul className="taskList">
    {tasks.map(task => (
      <li
        key={task.id}
        className={`taskList__item${task.done && hideDone ? " taskList__item--hidden" : ""}`}
      >
        <button className="taskList__button taskList__button--done">
          {task.done ? "✔" : ""}
        </button>
        <span className={task.done ? " taskList__span taskList__span--done" : ""}>
          {task.content}
        </span>
        <button className="taskList__button taskList__button--delete">
          🗑
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;