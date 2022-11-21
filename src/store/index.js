import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './filterSlice';
import todoReducer from './todoSlice';
import modalsReducer from './modalsSlice';

export default configureStore({
  reducer: {
    filter: filterReducer,
    todos: todoReducer,
		modals: modalsReducer,
  },
});
