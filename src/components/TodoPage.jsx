import AddTask from "./AddTask/AddTask";
import Filter from "./Filter/Filter";
import TaskList from "./TaskList/TaskList";
import "./TodoPage.css";

export default function TodoPage() {
  return (
    <div className="page-container">
      <h1>TODO LIST</h1>
      <div className="top-bar">
        <AddTask />
        <Filter />
      </div>
      <TaskList />
    </div>
  );
}
