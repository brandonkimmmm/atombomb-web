import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useSelector } from 'react-redux';
import { getUser } from '../../redux/user/userSlice';
import { Redirect } from 'react-router';

export const Dashboard = () => {
	const user = useSelector(getUser);

	const renderedPage = () => {
		if (!user.loggedIn) {
			return <Redirect to="/" />
		} else {
			return (
				<Fragment>
					<CssBaseline />
						<main>
							Herro
						</main>
				</Fragment>
			)
		}
	}
	return renderedPage();
}