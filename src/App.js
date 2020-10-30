import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from 'react-router-dom';
import { Landing } from './containers/Landing';
import { Navbar } from './components/Navbar';
import { LoginForm } from './components/LoginForm';
import { SignupForm } from './components/SignupForm';
import { SignupComplete } from './components/SignupComplete';

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Landing} />
				<Route exact path="/login" component={LoginForm} />
				<Route exact path="/signup" component={SignupForm} />
				<Route exact path="/signup/complete" component={SignupComplete} />
				<Redirect to="/" />
			</Switch>
		</Router>
	);
}

export default App;
