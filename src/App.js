import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Landing } from './containers/Landing';
import { Navbar } from './components/Navbar';
import { LoginForm } from './components/LoginForm';
import { SignupForm } from './components/SignupForm';
import { SignupComplete } from './components/SignupComplete';
import { Footer } from './components/Footer';
import { Dashboard } from './containers/Dashboard';
import Sidebar from './components/Sidebar';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	toolbar: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
}));

function App() {
	const classes = useStyles();
	return (
		<Router>
			<div className={classes.root}>
				<CssBaseline />
				<Navbar />
				<main className={classes.content}>
					<div className={classes.toolbar} />
					<Switch>
						<Route exact path="/" component={Landing} />
						{/* <Route exact path="/dashboard" component={Dashboard} /> */}
						<Route exact path="/login" component={LoginForm} />
						<Route exact path="/signup" component={SignupForm} />
						<Route exact path="/signup/complete" component={SignupComplete} />
						<Redirect to="/" />
					</Switch>
				</main>
			</div>
		</Router>
	);
}

export default App;
