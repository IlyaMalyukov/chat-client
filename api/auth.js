import http from '@/api/http';

export async function registration(name, password) {
	let { data } = await http.post(`${process.env.baseUrl}/registration`, {name, password})
	return data
}

export async function login(name, password) {
	let { data } = await http.post(`${process.env.baseUrl}/login`, {name, password})
	return data
}