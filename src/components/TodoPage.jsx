import AddTask from "./AddTask";
import Filter from "./Filter";
import TaskList from "./TaskList";

export default function TodoPage() {
  return (
    <>
      <h1>TODO LIST</h1>
      <AddTask />
      <Filter />
      <TaskList />
    </>
  );
}
