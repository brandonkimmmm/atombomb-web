import React, { useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { loginUser, getUser } from '../../redux/user/userSlice';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import MaterialUILink from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';
import { useHistory } from 'react-router';
import { Redirect, Link } from 'react-router-dom';
import { AlertComponent } from '../AlertComponent';

export const LoginForm = () => {
	const classes = useStyles();

	const user = useSelector(getUser);
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ alert, setAlert ] = useState({ message: '', open: false});

	const dispatch = useDispatch();
	const history = useHistory();

	const onEmailChanged = e => setEmail(e.target.value);
	const onPasswordChanged = e => setPassword(e.target.value);
	const onAlertClose = e => {
		setAlert({
			message: '',
			open: false
		});
	}
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
				<Grid container component="main" className={classes.root}>
					<CssBaseline />
					<Grid item xs={false} sm={4} md={7} className={classes.image} />
					<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
						<div className={classes.paper}>
							<Avatar className={classes.avatar}>
								<LockOutlinedIcon />
							</Avatar>
							<Typography component="h1" variant="h5">
								Sign in
							</Typography>
							<form className={classes.form} noValidate>
								<TextField
									variant="outlined"
									margin="normal"
									required
									fullWidth
									id="email"
									label="Email Address"
									name="email"
									autoComplete="email"
									value={email}
									autoFocus
									onChange={onEmailChanged}
								/>
								<TextField
									variant="outlined"
									margin="normal"
									required
									fullWidth
									name="password"
									label="Password"
									type="password"
									id="password"
									value={password}
									autoComplete="current-password"
									onChange={onPasswordChanged}
								/>
								<FormControlLabel
									control={<Checkbox value="remember" color="primary" />}
									label="Remember me"
								/>
								<Button
									type="submit"
									fullWidth
									variant="contained"
									color="primary"
									className={classes.submit}
									onClick={onLoginClicked}
									disabled={!canLogin}
								>
									Sign In
								</Button>
								<Grid container>
									<Grid item xs>
										<MaterialUILink variant="body2">
											Forgot password?
										</MaterialUILink>
									</Grid>
									<Grid item>
										<MaterialUILink component={Link} to="/signup" variant="body2">
											{"Don't have an account? Sign Up"}
										</MaterialUILink>
									</Grid>
								</Grid>
							</form>
						</div>
					</Grid>
				</Grid>
			)
		}
	}
	return (
		<Fragment>
			{<AlertComponent
				message={alert.message}
				severity="error"
				alertOpen={alert.open}
				onAlertClose={onAlertClose}
			/>}
			{renderedForm()}
		</Fragment>
	)
};