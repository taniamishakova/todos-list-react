import "./style.css";

const Tasks = ({ tasks, hideDoneTasks }) => (
  <ul className="taskList">
    {tasks.map(task => (
      <li
        className={`taskList__item${task.done && hideDoneTasks ? " taskList__item--hide" : ""}`}
      >
        <button className="taskList__button taskList__button--done">
          {task.done ? "🗸" : ""}
        </button>
        <span className={task.done ? "taskList__span--done" : ""}>
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