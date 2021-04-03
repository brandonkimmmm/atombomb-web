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
import { Dashboard } from './containers/Dashboard';

function App() {
	return (
		<Router>
			<div>
				<Navbar />
				<main className='pt-16'>
					<Switch>
						<Route exact path="/" component={Landing} />
						<Route exact path="/dashboard" component={Dashboard} />
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
