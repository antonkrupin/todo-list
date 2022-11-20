import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos = [action.payload, ...state.todos];
    },
    toggleComplete: (state, action) => {

    },
    removeTodo: (state, action) => {

    },
  }
});

export const {
  addTodo,
  toggleComplete,
  removeTodo,
} = todoSlice.actions;

export default todoSlice.reducer;

