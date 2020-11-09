import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useSelector } from 'react-redux';
import { getUser } from '../../redux/user/userSlice';
import { Redirect } from 'react-router';

import { LandingHero } from '../../components/LandingHero';
import { LandingFunctionalities } from '../../components/LandingFunctionalities';
import { LandingSocialMedia } from '../../components/LandingSocialMedia';

export const Landing = () => {
	const user = useSelector(getUser);

	const renderedPage = () => {
		if (user.loggedIn) {
			return <Redirect to="/dashboard" />
		} else {
			return (
				<Fragment>
					<CssBaseline />
					<main>
						<LandingHero />
						<LandingFunctionalities />
						<LandingSocialMedia />
					</main>
				</Fragment>
			)
		}
	}

	return renderedPage();
}