
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { signupUser, getUser } from '../../redux/user/userSlice';
import { useHistory } from 'react-router';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useStyles } from './styles';
import { Redirect } from 'react-router-dom';

export const SignupForm = () => {
	const classes = useStyles();

	const user = useSelector(getUser);
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ passwordConfirmation, setPasswordConfirmation ] = useState('');

	const dispatch = useDispatch();
	const history = useHistory();

	const onEmailChanged = e => setEmail(e.target.value);
	const onPasswordChanged = e => setPassword(e.target.value);
	const onPasswordConfiratiomChanged = e => setPasswordConfirmation(e.target.value);

	const canSignup =[ email, password, passwordConfirmation ].every(Boolean);

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
					//alert email sent
					history.push('/');
				}
			} catch (err) {
				console.log(err.message);
				setEmail('');
				setPassword('');
				setPasswordConfirmation('');
			}
		}
	}

	const renderedFrom = () => {
		if (user.loggedIn) {
			return <Redirect to="/" />
		} else {
			return (
				<Container component="main" maxWidth="xs">
					<CssBaseline />
					<div className={classes.paper}>
						<Avatar className={classes.avatar}>
							<LockOutlinedIcon />
						</Avatar>
						<Typography component="h1" variant="h5">
							Sign up
						</Typography>
						<form className={classes.form} noValidate>
							<Grid container spacing={2}>
								<Grid item xs={12}>
									<TextField
										variant="outlined"
										required
										fullWidth
										value={email}
										onChange={onEmailChanged}
										id="email"
										label="Email Address"
										name="email"
										autoComplete="email"
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										variant="outlined"
										required
										fullWidth
										value={password}
										onChange={onPasswordChanged}
										name="password"
										label="Password"
										type="password"
										id="password"
										autoComplete="current-password"
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										variant="outlined"
										required
										fullWidth
										value={passwordConfirmation}
										onChange={onPasswordConfiratiomChanged}
										name="passwordConfirmation"
										label="passwordConfirmation"
										type="password"
										id="passwordConfirmation"
										autoComplete="current-password"
									/>
								</Grid>
							</Grid>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								color="primary"
								className={classes.submit}
								onClick={onSignupClicked}
								disabled={!canSignup}
							>
								Sign Up
							</Button>
							<Grid container justify="flex-end">
								<Grid item>
								<Link href="/login" variant="body2">
									Already have an account? Log in
								</Link>
								</Grid>
							</Grid>
						</form>
					</div>
				</Container>
			)
		}
	}

	return renderedFrom();
}