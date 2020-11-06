import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { useStyles } from './styles';

import { LandingCard } from '../LandingCard';

export const LandingFunctionalities = () => {
	const classes = useStyles();
	return (
		<div className={classes.heroContent}>
			<Container maxWidth="lg">
				<Grid container spacing={4} justify="center">
					<Grid item>
						<LandingCard />
					</Grid>
					<Grid item>
						<LandingCard />
					</Grid>
					<Grid item>
						<LandingCard />
					</Grid>
				</Grid>
			</Container>
		</div>
	)
};