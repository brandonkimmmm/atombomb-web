import React, { useState, useEffect } from 'react';
import {
	Container
} from '@material-ui/core';
import { AlertComponent } from '../../components/AlertComponent';

export const Landing = ({ location }) => {
	const [ alert, setAlert ] = useState(
		location.state ? location.state.alertProps : { message: '', severity: '', open: false }
	);

	const onAlertClose = e => {
		setAlert({
			message: '',
			severity: '',
			open: false
		});
	};

	return (
		<Container>
			{alert.open && <AlertComponent
				message={alert.message}
				severity={alert.severity}
				alertOpen={alert.open}
				onAlertClose={onAlertClose}
			/>}
			<h1>Welcome</h1>
		</Container>
	)
};