import React, { useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { loginUser, getUser } from '../../redux/user/userSlice';
import { useHistory } from 'react-router';
import { Redirect, Link } from 'react-router-dom';

export const LoginForm = () => {
	const user = useSelector(getUser);
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ alert, setAlert ] = useState({ message: '', severity: '', open: false });

	const dispatch = useDispatch();
	const history = useHistory();

	const onEmailChanged = e => setEmail(e.target.value);
	const onPasswordChanged = e => setPassword(e.target.value);
	const onAlertClose = e => {
		setAlert({
			message: '',
			severity: '',
			open: false
		});
	};
	const canLogin = [ email, password ].every(Boolean);

	const onLoginClicked = async (e) => {
		e.preventDefault();
		if (canLogin) {
			try {
				const result = await dispatch(loginUser({ email, password }));
				unwrapResult(result);
				setEmail('');
				setPassword('');
				history.push('/');
			} catch (err) {
				setAlert({
					message: err.message,
					severity: 'error',
					open: true
				});
				setEmail('');
				setPassword('');
			}
		}
	}

	const renderedForm = () => {
		if (user.loggedIn) {
			return <Redirect to="/" />
		} else {
			return (
				'Hi'
			)
		}
	}
	return (
		<Fragment>
			{renderedForm()}
		</Fragment>
	)
};