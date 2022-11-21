import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';

import { db } from '../firebase/firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';
//import { ref, onValue, get, child } from 'firebase/database';
import { database } from '../firebase/firebase';
import { ref, set, push, remove, update } from 'firebase/database';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todoForChange: [],
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
			update(ref(database, 'todos/' + id), {
				completed: !completed,
			});
    },
    removeTodo: (state, action) => {
			const id = action.payload;
			remove(ref(database, 'todos/' + id));
    },
		setTodoForChange: (state, action) => {
			const { id, todo } = action.payload;
			state.todoForChange = [id, todo];
		},
  }
});

export const {
  addTodo,
  toggleComplete,
  removeTodo,
	setTodoForChange,
} = todoSlice.actions;

export default todoSlice.reducer;

