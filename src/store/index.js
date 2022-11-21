import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import modalsReducer from './modalsSlice';

export default configureStore({
  reducer: {
    todos: todoReducer,
		modals: modalsReducer,
  }
});
