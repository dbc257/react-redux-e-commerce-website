import FuseUtils from '@fuse/utils';
import { showMessage } from 'app/store/actions/fuse';
import axios from 'axios';

export const GET_PRODUCT = '[E-COMMERCE APP] GET PRODUCT';
export const SAVE_PRODUCT = '[E-COMMERCE APP] SAVE PRODUCT';

export function getProduct(params) {
	const request = axios.get(`https://art-shop-server.herokuapp.com/api/e-commerce-app/product/${params.productId}`);
	// const request = axios.get('/api/e-commerce-app/product', { params });

	return dispatch =>
		request.then(response =>
			dispatch({
				type: GET_PRODUCT,
				payload: response.data
			})
		);
}

export function saveProduct(data) {
	const request = axios.post('/api/e-commerce-app/product/save', data);
	// const request = axios.post('http://localhost:3001/api/e-commerce-app/product/save', data);

	return dispatch =>
		request.then(response => {
			dispatch(showMessage({ message: 'Product Saved' }));

			return dispatch({
				type: SAVE_PRODUCT,
				payload: response.data
			});
		});
}

export function newProduct() {
	const data = {
		id: FuseUtils.generateGUID(),
		name: '',
		handle: '',
		description: '',
		categories: [],
		tags: [],
		images: [],
		priceTaxExcl: 0,
		priceTaxIncl: 0,
		taxRate: 0,
		comparedPrice: 0,
		quantity: 0,
		sku: '',
		width: '',
		height: '',
		depth: '',
		weight: '',
		extraShippingFee: 0,
		active: true
	};

	return {
		type: GET_PRODUCT,
		payload: data
	};
}
