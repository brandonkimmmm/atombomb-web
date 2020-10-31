import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
	heroContent: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(8, 0, 6),
	},
	heroButtons: {
		marginTop: theme.spacing(4),
	}
}));