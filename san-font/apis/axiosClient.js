import axios from 'axios'

const axiosClient = axios.create({
	baseURL: `http://localhost:3000`,
	headers: {
		'content-type': 'application/json',
	},
	// paramsSerializer: params => queryString.stringify(params),
})

axiosClient.interceptors.request.use(
	config =>
		// Handle token here ...
		config
)

axiosClient.interceptors.response.use(
	response => {
		if (response && response.data) {
			return response.data
		}
		return response
	},
	error => {
		// Handle errors
		throw error
	}
)

export default axiosClient
