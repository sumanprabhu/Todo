import { useDispatch, useSelector } from "react-redux";
import {
  deleteTodo,
  editTodo,
  markAsDone,
} from "../../features/todo/todoSlice";
import { useEffect, useState } from "react";
import "./TaskList.css";
import { FaTrash, FaEdit } from "react-icons/fa";

export default function TaskList() {
  const todos = useSelector((state) => state.todos.todos);
  const filter = useSelector((state) => state.todos.filter);

  const filteredTodos = todos.filter((todo) => {
    if (filter === "complete") return todo.isDone;
    if (filter === "incomplete") return !todo.isDone;
    return true; // all
  });

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const dispatch = useDispatch();

  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  const handleStartEdit = (todo) => {
    setEditingId(todo.id);
    setEditingText(todo.task);
  };

  const handleSaveEdit = () => {
    dispatch(editTodo({ id: editingId, task: editingText }));
    setEditingId(null);
    setEditingText("");
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditingText("");
  };

  let emptyMessage = "";

  if (filter === "complete" && filteredTodos.length === 0) {
    emptyMessage = "No tasks completed yet";
  }

  return (
    <div className="tasks-wrapper">
      <h1 className="tasks-title">Tasks</h1>
      <ul>
        {filteredTodos.length === 0 && (
          <p className="empty-text">{emptyMessage}</p>
        )}
        {filteredTodos.map((todo) => (
          <li
            className="task-row"
            key={todo.id}
            style={{ display: "flex", gap: "10px", alignItems: "center" }}
          >
            <input
              type="checkbox"
              checked={todo.isDone}
              onChange={() => dispatch(markAsDone(todo.id))}
            />
            {editingId === todo.id ? (
              <input
                className="task-input"
                type="text"
                id="editTask"
                name="editTask"
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)}
              />
            ) : (
              <span
                style={{
                  textDecoration: todo.isDone ? "line-through" : "none",
                }}
              >
                {todo.task}
              </span>
            )}
            {editingId === todo.id ? (
              <>
                <button className="save-btn" onClick={handleSaveEdit}>
                  Save
                </button>
                <button className="cancel-btn" onClick={handleCancelEdit}>
                  Cancel
                </button>
              </>
            ) : (
              <div className="task-actions">
                <FaTrash
                  className="icon delete-icon"
                  onClick={() => dispatch(deleteTodo(todo.id))}
                />
                <FaEdit
                  className="icon edit-icon"
                  onClick={() => handleStartEdit(todo)}
                />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
