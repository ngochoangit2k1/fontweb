import axiosClient from './axiosClient'

const categoryApis = {
	getAllCategorys: params =>
		axiosClient.get('http://localhost:3000/api/product/get-list-category', {
			params,
		}),
}
export default categoryApis
