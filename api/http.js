import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.baseUrl,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
  }
});

export function addErrorHandler(fn) {
	instance.interceptors.response.use(r => r, fn);
}

export default instance;