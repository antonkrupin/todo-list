import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './filterSlice';
import todoReducer from './todoSlice';

export default configureStore({
  reducer: {
    filter: filterReducer,
    todo: todoReducer,
  },
});
