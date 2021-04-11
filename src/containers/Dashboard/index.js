import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getUserInfo } from '../../redux/user/userSlice';
import { Redirect } from 'react-router';
import moment from 'moment';
import axios from '../../api';
import { Pie } from 'react-chartjs-2';
import { TASK_STATUS } from '../../constants';

export const Dashboard = () => {
	const user = useSelector(getUserInfo);
	const [tasks, setTasks] = useState(null);
	const [stats, setStats] = useState(null);

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
					const tasksResponse = await axios.get('/user/tasks', {
						headers: {
							Authorization: `Bearer ${user.token}`
						}
					});

					const statsResponse = await axios.get('/user/stats', {
						headers: {
							Authorization: `Bearer ${user.token}`
						}
					});

					setTasks(tasksResponse.data);
					setStats(statsResponse.data);
				} catch (err) {
					console.log(err)
					console.log(err.response.data.message);
				}
			}
		}
		fetchTasks();
	}, [user])

	const taskStatus = (status) => {
		if (status === 0) {
			return 'Active';
		} else if (status === -1) {
			return 'Failed';
		} else if (status === 1) {
			return 'Successful';
		}
	}

	const tasksChartData = () => {
		if (stats && (stats.successful || stats.failed)) {
			return {
				labels: [
					'Successful',
					'Failed'
				],
				datasets: [{
					data: [stats.successful, stats.failed],
					backgroundColor: [
						'green',
						'red'
					],
					hoverBackgroundColor: [
						'green',
						'red'
					]
				}]
			}
		} else {
			return {
				labels: [
					'No Data'
				],
				datasets: [{
					data: [1],
					backgroundColor: [
						'grey'
					]
				}]
			}
		}
	}

	const renderedPage = () => {
		if (!user.token) {
			return <Redirect to="/" />
		} else {
			return (
				<main className='pt-8 max-w-7xl items-center m-auto'>
					<div className='grid grid-rows-2 grid-flow-col gap-4 px-10'>
						<div className='row-span-1 col-span-1 flex flex-col bg-gray-200 rounded-lg p-3 space-y-2'>
							<div>Email: {user.data.email}</div>
							<div>Member Since: {moment(user.data.createdAt).format('MMM DD, YYYY')}</div>
						</div>
						<div className='row-span-1 col-span-1 bg-gray-200 rounded-lg p-3 space-y-2'>
							<div>Connected Social Media:</div>
							{user.data.Twitter.id
								? <div>Twitter</div>
								: <div onClick={handleTwitterConnect}>Connect your Twitter</div>
							}
						</div>
						<div className='row-span-2 col-span-2 bg-gray-200 rounded-lg p-3 space-y-2 overflow-auto'>
							<div>Stats:</div>
							<Pie data={tasksChartData()} options={{ responsive: true, maintainAspectRatio: true }} />
						</div>
					</div>
					<div className='flex flex-col px-10 my-10'>
						<div className='flex flex-row justify-between'>
							<div>Tasks</div>
							<div>Create</div>
						</div>
						<table className='table w-full rounded-lg'>
							<thead className=''>
								<tr>
									<th className='border bg-black text-left text-white'>Task</th>
									<th className='border bg-black text-left text-white'>Deadline</th>
									<th className='border bg-black text-left text-white'>Bomb</th>
									<th className='border bg-black text-left text-white'>Status</th>
								</tr>
							</thead>
							<tbody>
								{tasks
									? tasks.data.map((task) => (
										<tr key={task.id}>
											<td className='border'>{task.description}</td>
											<td className='border'>{moment(task.deadline).format('LLL')}</td>
											<td className='border'>{task.bomb.twitter.notification}</td>
											<td className='border'>{taskStatus(task.status)}</td>
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