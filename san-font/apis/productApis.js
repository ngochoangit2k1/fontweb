import axios from 'axios'
import axiosClient from './axiosClient'

const productsApis = {
	getAllProducts: params =>
		axiosClient.get('http://localhost:3000/api/product', { params }),
	getProducts: params =>
		axiosClient.get('http://localhost:3000/api/product/get-list-category', {
			params,
		}),
	getCapacityProducts: params =>
		axiosClient.get('http://localhost:3000/api/product/detail-product', {
			params,
		}),
	getAllProductsClient: params => axiosClient.get('/api/product', { params }),
	getProductsClient: params =>
		axiosClient.get('/api/product/get-list-category', { params }),
}

export default productsApis
