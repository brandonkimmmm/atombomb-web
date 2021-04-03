import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, signupUser } from '../../redux/user/userSlice';
import { Redirect } from 'react-router';
import { unwrapResult } from '@reduxjs/toolkit';

export const Landing = () => {
	const user = useSelector(getUser);
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ passwordConfirmation, setPasswordConfirmation ] = useState('');

	const dispatch = useDispatch();

	const onEmailChanged = e => setEmail(e.target.value);
	const onPasswordChanged = e => setPassword(e.target.value);
	const onPasswordConfiratiomChanged = e => setPasswordConfirmation(e.target.value);

	const onSignupClicked = async (e) => {
		e.preventDefault();
		try {
			if (password !== passwordConfirmation) {
				throw new Error('Passwords do not match');
			} else {
				const result = await dispatch(signupUser({ email, password }));
				unwrapResult(result);
				setEmail('');
				setPassword('');
				setPasswordConfirmation('');
			}
		} catch (err) {
			setEmail('');
			setPassword('');
			setPasswordConfirmation('');
			console.log(err);
		}
	}

	const renderedPage = () => {
		// if (user.loggedIn) {
		// 	return <Redirect to="/dashboard" />
		// } else {
			return (
				<main className='flex flex-col h-screen'>
					<div className='flex flex-row bg-black justify-between items-center p-12 space-x-20 h-2/3'>
						<div className='flex flex-col justify-center w-1/2'>
							<div className='text-7xl mb-6 font-extrabold text-white'>
								Use peer pressure to your advantage
							</div>
							<div className='text-2xl mb-16 text-white'>
								Atom Bomb is the best way to make sure you keep up with the tasks you set for yourself. Simply connect your twitter account and finish your tasks... or else.
							</div>
							<form className='flex flex-col justify-center space-y-10 bg-yellow-200 p-8 border-4 border-black rounded-lg shadow-md'>
								<input type='text' placeholder='email' onChange={(e) => onEmailChanged(e)} id='email' name='email' value={email} className='bg-black text-white rounded-md p-4 placeholder-white'/>
								<input type='password' placeholder='password' onChange={(e) => onPasswordChanged(e)} id='password' value={password} name='password' className='bg-black text-white justify-aroundrounded-md p-4 placeholder-white' />
								<input type='password' placeholder='password confirmation' onChange={(e) => onPasswordConfiratiomChanged(e)} id='passwordConf' name='passwordConf' value={passwordConfirmation} className='bg-black text-white rounded-md p-4 placeholder-white' />
								<input type='submit' onClick={(e) => onSignupClicked(e)} value='Sign up to Atom Bomb!' className='font-bold text-2xl bg-green-400 text-white p-4 rounded-md' />
							</form>
						</div>
						<img className='w-1/2 object-contain h-1/2' src='https://www.pinclipart.com/picdir/big/526-5260657_bomb-outline-black-and-white-clip-art-at.png' />
					</div>
					<div className='flex flex-row space-x-10 p-10 h-full'>
						<div className='flex flex-col border-4 border-black rounded bg-yellow-200 px-4 py-10'>
							<img className='rounded mb-8' src='https://cdn.cms-twdigitalassets.com/content/dam/business-twitter/solutions/twitter-ads-social-share.jpg.twimg.768.jpg' />
							<div className='text-xl font-bold '>Connect</div>
							<div className='text-lg font-light'>Connect your twitter account</div>
						</div>
						<div className='flex flex-col border-4 border-black rounded bg-yellow-200 px-4 py-10'>
							<img className='rounded mb-8' src='https://cdn.cms-twdigitalassets.com/content/dam/business-twitter/solutions/twitter-ads-social-share.jpg.twimg.768.jpg' />
							<div className='text-xl font-bold '>Create</div>
							<div className='text-lg font-light'>Create a task to complete, set a deadline, and write a bomb message</div>
						</div>
						<div className='flex flex-col border-4 border-black rounded bg-yellow-200 px-4 py-10'>
							<img className='rounded mb-8' src='https://cdn.cms-twdigitalassets.com/content/dam/business-twitter/solutions/twitter-ads-social-share.jpg.twimg.768.jpg' />
							<div className='text-xl font-bold '>Complete</div>
							<div className='text-lg font-light'>Complete your tasks or have your bomb message posted on twitter</div>
						</div>
					</div>
					<div className='flex flex-col bg-black p-10 items-center space-y-10'>
						<div className='text-white text-5xl font-extrabold'>Supported Social Media</div>
						<div className='flex-row'>
							<img className='object-scale-down h-20' src='https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png' />
						</div>
						<div className='text-white font-light text-lg'>More to come!</div>
					</div>
				</main>
			)
		// }
	}

	return renderedPage();
}