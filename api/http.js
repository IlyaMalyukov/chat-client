import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.baseUrl
});

export function addErrorHandler(fn) {
	instance.interceptors.response.use(r => r, fn);
}

export default instance;