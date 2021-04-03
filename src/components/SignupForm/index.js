
import React, { useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { signupUser, getUser } from '../../redux/user/userSlice';
import { useHistory } from 'react-router';
import { Redirect, Link } from 'react-router-dom';

export const SignupForm = () => {

	const user = useSelector(getUser);
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ passwordConfirmation, setPasswordConfirmation ] = useState('');
	// const [ alert, setAlert ] = useState({ message: '', severity: '', open: false });


	const dispatch = useDispatch();
	// const history = useHistory();

	const onEmailChanged = e => setEmail(e.target.value);
	const onPasswordChanged = e => setPassword(e.target.value);
	const onPasswordConfiratiomChanged = e => setPasswordConfirmation(e.target.value);
	// const onAlertClose = e => {
	// 	setAlert({
	// 		message: '',
	// 		severity: '',
	// 		open: false
	// 	});
	// };

	const canSignup = [ email, password, passwordConfirmation ].every(Boolean);

	const onSignupClicked = async (e) => {
		e.preventDefault();
		if (canSignup) {
			try {
				if (password !== passwordConfirmation) {
					throw new Error('Passwords do not match');
				} else {
					const result = await dispatch(signupUser({ email, password }));
					unwrapResult(result);
					setEmail('');
					setPassword('');
					setPasswordConfirmation('');
					// history.push('/signup/complete');
				}
			} catch (err) {
				console.log(err) 
				// setAlert({
				// 	message: err.message,
				// 	severity: 'error',
				// 	open: true
				// });
				setEmail('');
				setPassword('');
				setPasswordConfirmation('');
			}
		}
	}

	const renderedForm = () => {
		if (user.loggedIn) {
			return <Redirect to="/" />
		} else {
			return (
				<div className='flex flex-row justify-center'>
					<div className='flex flex-col space-y-6 items-center'>
						<img className='w-20 object-contain h-20' src='https://www.pinclipart.com/picdir/big/526-5260657_bomb-outline-black-and-white-clip-art-at.png' />
						<div className='text-3xl font-bold'>Atom Bomb Signup</div>
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
								className='bg-black text-white rounded-md p-4 mb-4 placeholder-white'
							/>
							<input
								type='password'
								placeholder='password confirmation'
								onChange={(e) => onPasswordConfiratiomChanged(e)}
								id='passwordConf'
								name='passwordConf'
								value={passwordConfirmation}
								className='bg-black text-white rounded-md p-4 mb-8 placeholder-white'
							/>
							<input
								type='submit'
								onClick={(e) => onSignupClicked(e)}
								value='Signup'
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
}