import { useState } from "react";
import { addTodo } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";

export default function AddTask() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (eve) => {
    eve.preventDefault();
    dispatch(addTodo(task));
    console.log(task);
    setTask("");
  };

  return (
    <>
      <button onClick={submitHandler}>Add Task</button> &nbsp;
      <input
        type="text"
        id="inputTask"
        name="inputTask"
        onChange={(e) => setTask(e.target.value)}
      ></input>
    </>
  );
}
