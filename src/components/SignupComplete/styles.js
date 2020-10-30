import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	outerGrid: {
		height: "90vh"
	},
	innerGrid: {
		margin: 400
	},
	card: {
		minWidth: 275,
		paddingTop: 50,
		paddingBottom: 50,
		textAlign: "center",
		height: "100%",
		color: theme.palette.text.secondary
	},
	title: {
		marginBottom: 50
	},
	body: {
		marginBottom: 40
	}
}));