import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './styles';

import { LandingList } from '../LandingList';

export const LandingSocialMedia = () => {
	const classes = useStyles();
	return (
		<div className={classes.heroContent}>
			<Container maxWidth="lg">
				<Grid container spacing={4} justify="center">
					<Grid item lg={8}>
						<Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
							Album layout
						</Typography>
						<Typography variant="h5" align="center" color="textSecondary" paragraph>
							Something short and leading about the collection below—its contents, the creator, etc.
							Make it short and sweet, but not too short so folks don&apos;t simply skip over it
							entirely.
						</Typography>
					</Grid>
					<Grid item lg={3}>
						<LandingList />
					</Grid>
				</Grid>
			</Container>
		</div>
	)
};