import { createSlice } from '@reduxjs/toolkit';


const modalsSlice = createSlice({
	name: 'modals',
	initialState: {
		isChangeTodoShow: false,
	},
	reducers: {
		/**
		 * show and hide modal window
		 * @param {boolean} state 
		 */
		changeTodoModalShow: (state) => {
			state.isChangeTodoShow = !state.isChangeTodoShow;
		},
	},
});

export const {
	changeTodoModalShow,
} = modalsSlice.actions;

export default modalsSlice.reducer;