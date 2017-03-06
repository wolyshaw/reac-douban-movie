import fetch from 'isomorphic-fetch'

export const obj2str = obj => {
	let str = '?', k
	for (k in obj) {
		if (obj.hasOwnProperty(k)) {
			str += k + '=' + obj[k] + '&'
		}
	}
	return str.substring(0, str.length - 1)
}

export const doubanApi = (url, set = {}) => {
	return fetch('http://192.168.10.32:5000/v2' + url + obj2str(Object.assign(set, {count: 10})))
		.catch(err => console.error(err))
}
