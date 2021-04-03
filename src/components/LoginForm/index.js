import React, { useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { loginUser, getUserInfo } from '../../redux/user/userSlice';
import { useHistory } from 'react-router';
import { Redirect, Link } from 'react-router-dom';

export const LoginForm = () => {
	const user = useSelector(getUserInfo);
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	// const [ alert, setAlert ] = useState({ message: '', severity: '', open: false });

	const dispatch = useDispatch();
	const history = useHistory();

	const onEmailChanged = e => setEmail(e.target.value);
	const onPasswordChanged = e => setPassword(e.target.value);
	// const onAlertClose = e => {
	// 	setAlert({
	// 		message: '',
	// 		severity: '',
	// 		open: false
	// 	});
	// };
	const canLogin = [ email, password ].every(Boolean);

	const onLoginClicked = async (e) => {
		e.preventDefault();
		if (canLogin) {
			try {
				const result = await dispatch(loginUser({ email, password }));
				unwrapResult(result);
				setEmail('');
				setPassword('');
				history.push('/dashboard');
			} catch (err) {
				// setAlert({
				// 	message: err.message,
				// 	severity: 'error',
				// 	open: true
				// });
				setEmail('');
				setPassword('');
			}
		}
	}

	const renderedForm = () => {
		if (user.token) {
			return <Redirect to="/" />
		} else {
			return (
				<div className='flex flex-row justify-center pt-8'>
					<div className='flex flex-col space-y-6 items-center'>
						<img className='w-20 object-contain h-20' src='https://www.pinclipart.com/picdir/big/526-5260657_bomb-outline-black-and-white-clip-art-at.png' />
						<div className='text-3xl font-bold'>Atom Bomb Login</div>
						<form className='flex flex-col justify-center bg-yellow-200 p-8 border-4 border-black rounded-lg shadow-md'>
							<input
								type='text'
								placeholder='email'
								onChange={(e) => onEmailChanged(e)}
								id='email'
								name='email'
								value={email}
								className='bg-black text-white rounded-md p-4 mb-4 placeholder-white'
							/>
							<input
								type='password'
								placeholder='password'
								onChange={(e) => onPasswordChanged(e)}
								id='password'
								name='password'
								value={password}
								className='bg-black text-white rounded-md p-4 mb-8 placeholder-white'
							/>
							<input
								type='submit'
								onClick={(e) => onLoginClicked(e)}
								value='Login'
								className='font-bold text-2xl bg-green-400 text-white p-2 rounded-md'
							/>
						</form>
					</div>
				</div>
			)
		}
	}
	return (
		<Fragment>
			{renderedForm()}
		</Fragment>
	)
};