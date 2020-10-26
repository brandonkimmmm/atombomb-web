import {
	createSlice,
	createAsyncThunk
} from '@reduxjs/toolkit';

import client from '../../api';

export const loginUser = createAsyncThunk('user/loginUser', async (email, password) => {
	const response = await client.post('/login', {
		email,
		password
	});
	return {
		token: response.token,
		email
	}
});

const initialState = {
	loggedIn: false,
	token: '',
	email: ''
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: {
		[loginUser.fulfilled]: (state, action) => {
			const { email, token } = action.payload;
			state.token = token;
			state.email = email;
			state.loggedIn = true;
		}
	}
})

export default userSlice.reducer;