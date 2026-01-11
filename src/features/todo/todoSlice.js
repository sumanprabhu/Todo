import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  filter: "all",
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        task: action.payload,
        isDone: false,
      };
      state.todos.push(newTodo);
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    markAsDone: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );
    },

    editTodo: (state, action) => {
      const { id, task } = action.payload;
      state.todos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, task } : todo
      );
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, markAsDone, editTodo, setFilter } =
  todoSlice.actions;
export default todoSlice.reducer;
