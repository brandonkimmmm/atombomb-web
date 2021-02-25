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
			<nav className='relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg mb-3 bg-gray-400'>
				<div className='container px-4 mx-auto flex flex-wrap items-center justiy-between'>
					<div className='w-full relative flex justify-between'>
						<a
							className='text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white'
							href='#'
						>
							Atom Bomb
						</a>
						<button
							className='text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
							type='button'
						>
							Hi
						</button>
					</div>
				</div>
			</nav>
		</Fragment>
	);
}
