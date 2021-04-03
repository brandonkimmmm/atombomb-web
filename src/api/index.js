import axios from 'axios';
import { API_URL } from '../constants';

console.log(API_URL)

export default axios.create({
	baseURL: API_URL,
	headers: {
		post: {
			'Content-Type': 'application/json'
		}
	}
});