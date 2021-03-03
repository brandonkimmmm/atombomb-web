import React, { useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUser, logoutUser } from '../../redux/user/userSlice';
import { Link, useHistory } from 'react-router-dom';

export const Navbar = (props) => {
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

	return (
		<Fragment>
			<nav className='relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-black'>
				<div className='container px-4 mx-auto flex flex-wrap items-center justiy-between'>
					<div className='w-full relative flex items-center justify-between'>
						<a
							className='text-lg font-bold leading-relaxed  uppercase text-white'
							href='#'
						>
							Atom Bomb
						</a>
						<div className='flex space-x-2 justify-between items-center'>
							<button type='button' className='border rounded-md p-2 text-white'>Login</button>
							<button type='button' className='border rounded-md p-2 text-white'>Signup</button>
						</div>
					</div>
				</div>
			</nav>
		</Fragment>
	);
}
