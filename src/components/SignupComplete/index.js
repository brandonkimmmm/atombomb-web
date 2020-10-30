import React from 'react';
import { useSelector } from 'react-redux';
import { getUser } from '../../redux/user/userSlice';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from "@material-ui/core/Grid";
import { useStyles } from './styles';

export const SignupComplete = () => {
	const classes = useStyles();

	return (
		<div>
			<Grid
				containerss
				className={classes.outerGrid}
				justify="center"
				alignItems="stretch"
				spacing={3}
			>
				<Grid
					item
					xs={12}
					className={classes.innerGrid}
				>
					<Card className={classes.card}>
						<CardContent>
							<Typography className={classes.title} variant="h1" color="textPrimary" gutterBottom>
								Signup Completed
							</Typography>
							<Typography className={classes.body} variant="h5" component="h2" gutterBottom>
								An email has been sent to you with further steps to verify your account.
							</Typography>
							<Typography variant="body2" component="p">
								Didn't get an email? Click here.
							</Typography>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</div>
	);
}