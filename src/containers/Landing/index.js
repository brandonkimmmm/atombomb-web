import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { getUser } from '../../redux/user/userSlice';
import { Redirect } from 'react-router';


export const Landing = () => {
	const user = useSelector(getUser);

	const renderedPage = () => {
		// if (user.loggedIn) {
		// 	return <Redirect to="/dashboard" />
		// } else {
			return (
				<Fragment>
					<main className='flex flex-col'>
						<div className='flex flex-row bg-black justify-between p-12 space-x-20 h-3/4'>
							<div className='flex flex-col justify-center w-1/2'>
								<div className='text-7xl mb-6 font-extrabold text-white'>
									Use peer pressure to your advantage
								</div>
								<div className='text-2xl mb-16 text-white'>
									Atom Bomb is the best way to make sure you keep up with the tasks you set for yourself. Simply connect your twitter account and finish your tasks... or else.
								</div>
								<form className='flex flex-col justify-center space-y-10 bg-yellow-200 p-8 border-4 border-black rounded-lg shadow-md'>
									<input type='text' placeholder='email' id='email' name='email' value='' className='bg-black rounded-md p-4 placeholder-white'/>
									<input type='password' placeholder='password' id='password' value='' name='password' className='bg-black rounded-md p-4 placeholder-white' />
									<input type='password' placeholder='password confirmation' id='passwordConf' name='passwordConf' value='' className='bg-black rounded-md p-4 placeholder-white' />
									<input type='submit' value='Sign up to Atom Bomb!' className='font-bold text-2xl bg-green-400 text-white p-4 rounded-md' />
								</form>
							</div>
							<img className='w-1/2' src='https://www.pinclipart.com/picdir/big/526-5260657_bomb-outline-black-and-white-clip-art-at.png' />
						</div>
						<div className='flex flex-row'>
							Hello
						</div>
						{/* <div className='flex flex-row'>
							Hello
						</div> */}
					</main>
				</Fragment>
			)
		// }
	}

	return renderedPage();
}