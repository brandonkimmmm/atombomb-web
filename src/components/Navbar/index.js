import React, { useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUser, logoutUser } from '../../redux/user/userSlice';
import { Link, useHistory } from 'react-router-dom';

export const Navbar = (props) => {
	const { window } = props;
	const [anchorEl, setAnchorEl] = useState(null);
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const open = Boolean(anchorEl);

	const user = useSelector(getUser);
	const dispatch = useDispatch();
	const history = useHistory();

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleLogout = () => {
		dispatch(logoutUser());
		history.push('/');
	}

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const redneredAppBar = () => {
		return (
			<div>Hi</div>
		)
	}

	const container = window !== undefined ? () => window().document.body : undefined;

	return (
		<Fragment>
			{redneredAppBar()}
		</Fragment>
	);
}
