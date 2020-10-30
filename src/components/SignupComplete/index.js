import React from 'react';
import { useSelector } from 'react-redux';
import { getUser } from '../../redux/user/userSlice';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
	outerGrid: {
		height: "90vh"
	},
	innerGrid: {
		// marginTop: 100,
		// marginBottom: 100,
		// marginLeft: 100,
		// marginRight: 100
		margin: 300
	},
	card: {
		minWidth: 275,
		paddingTop: 100,
		textAlign: "center",
		// verticalAlign: true,
		height: "100%",
		color: theme.palette.text.secondary
	},
	title: {
		marginBottom: 50
	},
	body: {
		marginBottom: 25
	}
}));

export const SignupComplete = () => {
	const classes = useStyles();

	return (
		<div>
			<Grid
				container
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