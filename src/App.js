import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from 'react-router-dom';
import { Landing } from './containers/landing/Landing';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path = "/" component={Landing} />
			</Switch>
		</Router>
	);
}

export default App;
