import { createSlice } from '@reduxjs/toolkit';

import { database } from '../firebase/firebase';
import { ref, push, remove, update } from 'firebase/database';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todoForChange: [],
    todoStatus: '',
  },
  reducers: {
		/**
		 * add new todo to database
		 * @param {*} state 
		 * @param {object} action new todo object - 
		 * title: string,
      description: string,
      date: string,
      files: array,
      completed: boolean,
		 */
    addTodo: (state, action) => {
      try {
				push(ref(database, 'todos'), action.payload);
			} catch(e) {
				throw e;
			}
    },
		/**
		 * toogle complete for todo
		 * @param {*} state 
		 * @param {object} action 
		 * id - string, key for todo in database,
		 * completed - boolean
		 */
    toggleComplete: (state, action) => {
			const { id, completed } = action.payload;
      try {
				update(ref(database, 'todos/' + id), {
          completed: !completed,
        });
			} catch(e) {
				throw e;
			}
    },
		/**
		 * remove todo from database
		 * @param {*} state 
		 * @param {string} action 
		 * id - string, key for todo in database
		 */
    removeTodo: (state, action) => {
			const id = action.payload;
      try {
				remove(ref(database, 'todos/' + id));
			} catch(e) {
				throw e;
			}
    },
		/**
		 * set todo for change
		 * @param {*} state 
		 * @param {object} action
		 * id - string, key for todo in database,
		 * todo object
		 */
		setTodoForChange: (state, action) => {
			const { id, todo } = action.payload;
			state.todoForChange = [id, todo];
		},
		/**
		 * change todo
		 * @param {*} state 
		 * @param {objcet} action 
		 * todoKey - string, key for todo in database;
		 * changedTodo - object with changed values
		 */
    changeTodo: (state, action) => {
      const { todoKey, changedTodo } = action.payload;
      try {
				update(ref(database, 'todos/' + todoKey), changedTodo);
			} catch(e) {
				throw e;
			}
    },
		/**
		 * change status for todo list
		 * @param {string} state 
		 * @param {string} action
		 */
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

