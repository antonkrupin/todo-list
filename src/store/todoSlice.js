import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';

import { db } from '../firebase/firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { ref, onValue, get, child } from 'firebase/database';
import { database } from '../firebase/firebase';


export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  /*async function() {
    const response = ref(database, 'todos');
    const todos = [];
    await onValue(response, (snapshot) => {
      const data = snapshot.val();
      const keys = Object.keys(data);
      keys.forEach((key) => {
        todos.push(data[key]);
      });
    })
    return todos;
  }*/
  /*async function() {
    const refdb = ref(database);
      const test = await get(child(refdb, 'todos')).then((snapshot) => {
        if (snapshot.exists()) {
          return snapshot.val();
          //console.log(snapshot.val());
        } else {
          console.log("No data available");
        }
      });
      console.log(test);
  }*/
)

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
    addTodoFb: async (state, action) => {
      /*try {
        const test = await addDoc(collection(db, 'todos'), action.payload);
        console.log(test);
      } catch(e) {
        throw e;
      }*/
    },
    setTodos: async (state, action) => {
      const refdb = ref(database);
      const todos = [];
      const test = await get(child(refdb, 'todos')).then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const keys = Object.keys(data);
          keys.forEach((key) => {
            const todo = data[key];
            todo.key = key;
            state.todos = [todo, ...state.todos];
            todos.push(todo);
          });
          return todos;
        } else {
          console.log("No data available");
        }
      })
      console.log('start');
      console.log(test);
      console.log('state', state.todos);
      //state.todos.push(test);
      console.log('state', state.todos);
      console.log('finished');
      /*const response = ref(database, 'todos');
      const todos = [];
      onValue(response, (snapshot) => {
        const data = snapshot.val();
        const keys = Object.keys(data);
        keys.forEach((key) => {
          todos.push(data[key]);
        });
      });*/
      //state.todos = todos;
      //todos.then((data) => state.todos = data);
    },
    extraReducers: {
      [fetchTodos.pending]: (state) => {
        console.log('pending');
      },
      [fetchTodos.fulfilled]: (state, action) => {
        console.log('resolved');
        console.log(action.payload);
        state.todos = action.payload;
      },
      [fetchTodos.rejected]: (state) => {
        console.log('rejected');
      },
    },
  }
});

export const {
  addTodo,
  toggleComplete,
  removeTodo,
  addTodoFb,
  setTodos,
} = todoSlice.actions;

export default todoSlice.reducer;

