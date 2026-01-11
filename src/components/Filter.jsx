import { useDispatch } from "react-redux";
import { setFilter } from "../features/todo/todoSlice";

export default function Filter() {
  const dispatch = useDispatch();
  return (
    <div>
      <select
        id="taskFilter"
        name="taskFilter"
        onChange={(e) => dispatch(setFilter(e.target.value))}
      >
        <option value="all">All Tasks</option>
        <option value="complete">Tasks Completed</option>
        <option value="incomplete">Not Completed (In Progress) </option>
      </select>
    </div>
  );
}
