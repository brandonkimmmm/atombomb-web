import {
	createSlice,
	createAsyncThunk
} from '@reduxjs/toolkit';

import axios from '../../api';

export const loginUser = createAsyncThunk('user/loginUser', async ({ email, password}) => {
	const response = await axios.post('/login', {
		email,
		password
	});
	return {
		token: response.data.token,
		email
	}
});

export const signupUser = createAsyncThunk('user/signupUser', ({ email, password}) => {
	return axios.post('signup', {
		email,
		password
	});
})

const initialState = {
	loggedIn: false,
	token: '',
	email: ''
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		logoutUser(state, action) {
			state.loggedIn = false;
			state.email = '';
			state.password = '';
			state.token = '';
		}
	},
	extraReducers: {
		[loginUser.fulfilled]: (state, action) => {
			const { email, token } = action.payload;
			state.token = token;
			state.email = email;
			state.loggedIn = true;
		}
	}
})

export const { logoutUser } = userSlice.actions;

export const userLoggedIn = state => state.user.loggedIn;

export const getUser = state => state.user;

export default userSlice.reducer;