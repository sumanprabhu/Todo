import { useDispatch } from "react-redux";
import { setFilter } from "../../features/todo/todoSlice";
import "./Filter.css";

export default function Filter() {
  const dispatch = useDispatch();
  return (
    <div className="filter-container">
      <select
        id="filterTask"
        name="filterTask"
        onChange={(e) => dispatch(setFilter(e.target.value))}
      >
        <option value="all">All Tasks</option>
        <option value="complete">Tasks Completed</option>
        <option value="incomplete">Not Completed (In Progress) </option>
      </select>
    </div>
  );
}
