import React from 'react';
import {
	Container
} from '@material-ui/core';
import { LoginForm } from '../../components/LoginForm';

export const Landing = () => {
	return (
		<Container>
			<h1>Welcome</h1>
			<LoginForm />
		</Container>
	)
};