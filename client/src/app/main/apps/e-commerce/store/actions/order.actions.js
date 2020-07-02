import { showMessage } from 'app/store/actions/fuse';
import axios from 'axios';

export const GET_ORDER = '[E-COMMERCE APP] GET ORDER';
export const SAVE_ORDER = '[E-COMMERCE APP] SAVE ORDER';

export function getOrder(params) {
	const request = axios.get(`https://agile-reef-55162.herokuapp.com/api/e-commerce-app/order/${params.orderId}`);
	// const request = fetch('http://localhost:3001/api/e-commerce-app/order', { params });

	return dispatch =>
		request.then(response =>
			dispatch({
				type: GET_ORDER,
				payload: response.data
			})
		);
}

export function saveOrder(data) {
	const request = axios.post('/api/e-commerce-app/order/save', data);
	console.log(data);
	return dispatch =>
		request.then(response => {
			dispatch(showMessage({ message: 'Order Saved' }));

			return dispatch({
				type: SAVE_ORDER,
				payload: response.data
			});
		});
}
