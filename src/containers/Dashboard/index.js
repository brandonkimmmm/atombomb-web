import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { getUser } from '../../redux/user/userSlice';
import { Redirect } from 'react-router';

export const Dashboard = () => {
	const user = useSelector(getUser);

	const renderedPage = () => {
		// if (!user.loggedIn) {
		// 	return <Redirect to="/" />
		// } else {
			return (
				<Fragment>
					<div className='pt-20 grid grid-rows-2 grid-flow-col gap-4 px-10'>
						<div className='row-span-1 col-span-1 flex flex-col bg-gray-200'>
							<div>Account</div>
							<div>Email: Brandon</div>
							<div>Member since: 9000</div>
							<div>Account: Basic</div>
						</div>
						<div className='row-span-1 col-span-1 bg-gray-200'>
							<div>Connected Social Media</div>
							<div>Twitter</div>
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
				</Fragment>
			)
		// }
	}

	return renderedPage();
}