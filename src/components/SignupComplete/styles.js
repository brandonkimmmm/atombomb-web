import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	outerGrid: {
		height: "90vh"
	},
	innerGrid: {
		margin: 300
	},
	card: {
		minWidth: 275,
		paddingTop: 100,
		textAlign: "center",
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