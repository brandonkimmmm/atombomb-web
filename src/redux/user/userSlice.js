import {
	createSlice,
	createAsyncThunk
} from '@reduxjs/toolkit';

import axios from '../../api';

export const loginUser = createAsyncThunk('user/loginUser', async ({ email, password }) => {
	const loginResponse = await axios.post('/login', {
		email,
		password
	});

	return loginResponse.data.token;
});

export const getUser = createAsyncThunk('user/getUser', async (_, { getState }) => {
	const { token } = getState().user;
	if (token) {
		const userResponse = await axios.get('/user', {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});
		return userResponse.data;
	} else {
		return null;
	}
});

export const signupUser = createAsyncThunk('user/signupUser', async ({ email, password }) => {
	await axios.post('/signup', {
		email,
		password
	});
	return;
});

// export const getUser = createAsyncThunk(
// 	'user/getUser',
// 	async (_, { getState }) => {
// 		const response = await axios.get('/user', {
// 			headers: {
// 				Authorization: `Bearer ${getState().token}`
// 			}
// 		});
// 		return response.data;
// 	},
// 	{
// 		condition: (_, { getState }) => {
// 			const { token, data } = getState();
// 			if (!token) return false;
// 			if (data) return false;
// 		}
// 	}
// );

const initialState = {
	token: null,
	data: null
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		logoutUser(state, action) {
			state.token = null;
			state.data = null;
		}
	},
	extraReducers: {
		[loginUser.fulfilled]: (state, action) => {
			const token = action.payload;
			state.token = token;
		},
		[getUser.fulfilled]: (state, action) => {
			const data = action.payload;
			state.data = data;
		}
	}
})

export const { logoutUser } = userSlice.actions;

export const getUserInfo = state => state.user;

export default userSlice.reducer;