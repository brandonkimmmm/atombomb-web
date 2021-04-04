import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getUserInfo } from '../../redux/user/userSlice';
import { Redirect } from 'react-router';
import moment from 'moment';
import axios from '../../api';

export const Dashboard = () => {
	const user = useSelector(getUserInfo);
	const [tasks, setTasks] = useState(null);

	const handleTwitterConnect = async () => {
		try {
			const response = await axios.get('/twitter/connect', {
				headers: {
					Authorization: `Bearer ${user.token}`
				}
			});
			window.location.assign(response.data.redirectUrl);
		} catch (err) {
			console.log(err.response.data.message)
		}
	}

	useEffect(() => {
		const fetchTasks = async () => {
			if (user.token) {
				try {
					const response = await axios.get('/tasks', {
						headers: {
							Authorization: `Bearer ${user.token}`
						}
					});
					console.log(response.data)
					setTasks(response.data);
				} catch (err) {
					console.log(err.response.data.message);
				}
			}
		}
		fetchTasks();
	}, [user])

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
							{user.data.Twitter.id
								? <div>Twitter</div>
								: <div onClick={handleTwitterConnect}>Connect your Twitter</div>
							}
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
								{tasks
									? tasks.data.map((task) => (
										<tr key={task.id}>
											<td>{task.description}</td>
											<td>{moment(task.deadline).format('LLL')}</td>
											<td>{task.bomb.twitter.notification}</td>
										</tr>
									))
									: null
								}
							</tbody>
						</table>
					</div>
				</main>
			)
		}
	}

	return renderedPage();
}