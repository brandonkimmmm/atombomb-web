import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { getUserInfo } from '../../redux/user/userSlice';
import { Redirect } from 'react-router';
import moment from 'moment';
import axios from '../../api';

export const Dashboard = () => {
	const user = useSelector(getUserInfo);

	const handleTwitterConnect = async () => {
		try {
			const redirectUrl = await axios.get('/twitter/connect', {
				headers: {
					Authorization: `Bearer ${user.token}`
				}
			});
			window.location.assign(redirectUrl);
		} catch (err) {
			console.log(err.response.data.message)
		}
	}

	const renderedPage = () => {
		if (!user.token) {
			return <Redirect to="/" />
		} else {
			return (
				<main className='pt-8'>
					<div className='grid grid-rows-2 grid-flow-col gap-4 px-10'>
						<div className='row-span-1 col-span-1 flex flex-col bg-gray-200'>
							<div>Account</div>
							<div>Email: {user.data.email}</div>
							<div>Member Since: {moment(user.data.createdAt).format('MMM DD, YYYY')}</div>
						</div>
						<div className='row-span-1 col-span-1 bg-gray-200'>
							<div>Connected Social Media</div>
							<div>Twitter</div>
							<div onClick={handleTwitterConnect}>Conn</div>
						</div>
						<div className='row-span-2 col-span-2 bg-gray-200'>
							<div>Stats</div>
							<div>There</div>
						</div>
					</div>
					<div className='flex flex-col px-10 my-10'>
						<div className='flex flex-row justify-between'>
							<div>Tasks</div>
							<div>Create</div>
						</div>
						<table>
							<thead>
								<tr>
									<th>Task</th>
									<th>Deadline</th>
									<th>Bomb</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Hello</td>
									<td>There</td>
									<td>Yo</td>
								</tr>
							</tbody>
						</table>
					</div>
				</main>
			)
		}
	}

	return renderedPage();
}