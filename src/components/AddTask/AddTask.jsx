import { useState } from "react";
import { addTodo } from "../../features/todo/todoSlice";
import { useDispatch } from "react-redux";
import "./AddTask.css";

export default function AddTask() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (eve) => {
    eve.preventDefault();
    if (task.trim() === "") {
      alert("Task cannot be empty");
      return;
    }
    dispatch(addTodo(task));
    console.log(task);
    setTask("");
  };

  return (
    <div className="addtask-container">
      <button onClick={submitHandler}>Add Task</button> &nbsp;
      <input
        type="text"
        id="inputTask"
        name="inputTask"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      ></input>
    </div>
  );
}
