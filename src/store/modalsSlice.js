import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isChangeTodoShow: false,
};

const modalsSlice = createSlice({
	name: 'modals',
	initialState,
	reducers: {
		changeTodoModalShow: (state) => {
			state.isChangeTodoShow = !state.isChangeTodoShow;
		},
	},
});

export const {
	changeTodoModalShow,
} = modalsSlice.actions;

export default modalsSlice.reducer;