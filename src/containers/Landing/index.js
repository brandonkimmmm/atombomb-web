import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { getUser } from '../../redux/user/userSlice';
import { Redirect } from 'react-router';


export const Landing = () => {
	const user = useSelector(getUser);

	const renderedPage = () => {
		if (user.loggedIn) {
			return <Redirect to="/dashboard" />
		} else {
			return (
				<Fragment>
					<main>
						Hi
					</main>
				</Fragment>
			)
		}
	}

	return renderedPage();
}