import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { loginUser } from '../../redux/user/userSlice';

export const LoginForm = () => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	const dispatch = useDispatch();

	const onEmailChanged = e => setEmail(e.target.value);
	const onPasswordChanged = e => setPassword(e.target.value);
	const canLogin = [ email, password ].every(Boolean);

	const onLoginClicked = async () => {
		if (canLogin) {
			try {
				const result = await dispatch(loginUser({ email, password }));
				unwrapResult(result);
				setEmail('');
				setPassword('');
			} catch (err) {
				console.log(err.message);
				setEmail('');
				setPassword('');
			}
		}
	}
	return (
		<section>
			<h2>Login</h2>
			<form>
				<label htmlFor="email">Email</label>
				<input
					type="text"
					id="email"
					name="email"
					value={email}
					onChange={onEmailChanged}
				/>
				<label htmlFor="password">Password</label>
				<input
					type="password"
					id="password"
					name="password"
					value={password}
					onChange={onPasswordChanged}
				/>
				<button type="button" onClick={onLoginClicked} disabled={!canLogin}>
					Save Post
				</button>
			</form>
		</section>
	)
};