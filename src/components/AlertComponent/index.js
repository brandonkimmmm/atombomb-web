import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { useStyles } from './styles';

export const AlertComponent = ({message, severity, alertOpen, onAlertClose}) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Collapse in={alertOpen}>
				<Alert
					severity={severity}
					action={
						<IconButton
							aria-label="close"
							color="inherit"
							size="small"
							onClick={onAlertClose}
						>
							<CloseIcon fontSize="inherit" />
						</IconButton>
					}
				>
					{message}
				</Alert>
			</Collapse>
		</div>
	)
};