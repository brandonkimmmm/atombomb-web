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

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Landing} />
				<Route exact path="/login" component={LoginForm} />
				<Redirect to="/" />
			</Switch>
		</Router>
	);
}

export default App;
