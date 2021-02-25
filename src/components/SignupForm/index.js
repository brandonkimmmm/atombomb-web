
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
	const [ alert, setAlert ] = useState({ message: '', severity: '', open: false });


	const dispatch = useDispatch();
	const history = useHistory();

	const onEmailChanged = e => setEmail(e.target.value);
	const onPasswordChanged = e => setPassword(e.target.value);
	const onPasswordConfiratiomChanged = e => setPasswordConfirmation(e.target.value);
	const onAlertClose = e => {
		setAlert({
			message: '',
			severity: '',
			open: false
		});
	};

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
					history.push('/signup/complete');
				}
			} catch (err) {
				setAlert({
					message: err.message,
					severity: 'error',
					open: true
				});
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
				<div>hi</div>
			)
		}
	}

	return (
		<Fragment>
			{renderedForm()}
		</Fragment>
	)
}