import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';

import { database } from '../firebase/firebase';
import { ref, push, remove, update } from 'firebase/database';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todoForChange: [],
    todoStatus: '',
  },
  reducers: {
    addTodo: (state, action) => {
      try {
				push(ref(database, 'todos'), action.payload);
			} catch(e) {
				throw e;
			}
    },
    toggleComplete: (state, action) => {
			const {id, completed } = action.payload;
      try {
				update(ref(database, 'todos/' + id), {
          completed: !completed,
        });
			} catch(e) {
				throw e;
			}
    },
    removeTodo: (state, action) => {
			const id = action.payload;
      try {
				remove(ref(database, 'todos/' + id));
			} catch(e) {
				throw e;
			}
    },
		setTodoForChange: (state, action) => {
			const { id, todo } = action.payload;
			state.todoForChange = [id, todo];
		},
    changeTodo: (state, action) => {
      const { todoKey, changedTodo } = action.payload;
      try {
				update(ref(database, 'todos/' + todoKey), changedTodo);
			} catch(e) {
				throw e;
			}
    },
    changeTodoStatus: (state, action) => {
      state.todoStatus = action.payload;
    }
  }
});

export const {
  addTodo,
  toggleComplete,
  removeTodo,
	setTodoForChange,
  changeTodo,
  changeTodoStatus,
} = todoSlice.actions;

export default todoSlice.reducer;

