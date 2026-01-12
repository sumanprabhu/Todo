import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, editTodo, markAsDone } from "../features/todo/todoSlice";
import { useEffect, useState } from "react";

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

  return (
    <div>
      <h1>Tasks</h1>
      <ul>
        {filteredTodos.map((todo) => (
          <li
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
                <button onClick={handleSaveEdit}>Save</button>
                <button onClick={handleCancelEdit}>Cancel</button>
              </>
            ) : (
              <>
                <button onClick={() => dispatch(deleteTodo(todo.id))}>
                  Delete
                </button>
                <button onClick={() => handleStartEdit(todo)}>Edit</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
