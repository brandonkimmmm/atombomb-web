import React, { useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserInfo, logoutUser } from '../../redux/user/userSlice';
import { Link, useHistory } from 'react-router-dom';
import LoginForm from '../LoginForm';

export const Navbar = (props) => {
	const [anchorEl, setAnchorEl] = useState(null);
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const open = Boolean(anchorEl);

	const user = useSelector(getUserInfo);
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

	const renderNavButtons = () => {
		if (user.token) {
			return (
				<div className='flex space-x-2 justify-between items-center'>
					<div onClick={handleLogout} className='border rounded-md p-2 text-white cursor-pointer'>Logout</div>
				</div>
			)
		} else {
			return (
				<div className='flex space-x-2 justify-between items-center'>
					<Link to='/login' className='border rounded-md p-2 text-white'>Login</Link>
					<Link to='signup' className='border rounded-md p-2 text-white'>Signup</Link>
				</div>
			)
		}
	}

	return (
		<Fragment>
			<nav className='absolute flex w-full flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg'>
				<div className='container px-4 mx-auto flex flex-wrap items-center justiy-between'>
					<div className='w-full relative flex items-center justify-between'>
						<Link
							className='text-lg font-bold leading-relaxed  uppercase text-white'
							to='/'
						>
							Atom Bomb
						</Link>
						{renderNavButtons()}
					</div>
				</div>
			</nav>
		</Fragment>
	);
}
