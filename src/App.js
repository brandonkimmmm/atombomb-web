import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from 'react-router-dom';
import { Landing } from './containers/Landing';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path = "/" component={Landing} />
				<Redirect to="/" />
			</Switch>
		</Router>
	);
}

export default App;
