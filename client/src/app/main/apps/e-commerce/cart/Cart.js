import FusePageSimple from '@fuse/core/FusePageSimple';
// import FusePageCarded from '@fuse/core/FusePageCarded';
import withReducer from 'app/store/withReducer';
import React, { useState, useEffect } from 'react';
import reducer from '../store/reducers';
import CartHeader from './CartHeader';
// import CheckoutTable from './CheckoutTable';
import { useDispatch, useSelector } from 'react-redux';
// import { withRouter, useParams } from 'react-router-dom';
// import OrdersStatus from '../order/OrdersStatus';
import * as Actions from '../store/actions';
import { useDeepCompareEffect } from '@fuse/hooks';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';
// import CheckoutTableHead from './CheckoutTableHead';
import { Link, useParams } from 'react-router-dom';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import clsx from 'clsx';

function Cart(props) {
	const routeParams = useParams();
	// const [order, setOrder] = useState([]);
	// let fetchOrder = () => {
	// 	fetch(`http://localhost:3001/api/e-commerce-app/orders/${routeParams}`)
	// 		.then(response => response.json())
	// 		.then(result => {
	// 			console.log(result);
	// 			setOrder(result);
	// 		});
	// };

	// useEffect(() => {
	// 	fetchOrder();
	// }, []);

	const dispatch = useDispatch();
	const order = useSelector(({ eCommerceApp }) => eCommerceApp.order);

	// const [tabValue, setTabValue] = useState(0);
	// const [map, setMap] = useState('shipping');

	useDeepCompareEffect(() => {
		dispatch(Actions.getOrder(routeParams));
	}, [dispatch, routeParams]);

	// const formatter = new Intl.NumberFormat('en-US', {
	// 	style: 'currency',
	// 	currency: 'USD',
	// 	minimumFractionDigits: 2
	// });

	return (
		<FusePageSimple
			classes={{
				content: 'flex',
				header: 'min-h-72 h-72 sm:h-136 sm:min-h-136'
			}}
			header={<CartHeader />}
			content={
				<div className="flex-grow flex-shrink-0 p-0">
					{order && (
						<div className="table-responsive">
							<table className="simple">
								<thead>
									<tr>
										<th>ID</th>
										<th>Image</th>
										<th>Name</th>
										<th>Price</th>
										<th>Quantity</th>
									</tr>
								</thead>
								<tbody>
									{order.products.map(product => (
										<tr key={product.id}>
											<td className="w-64">{product.id}</td>
											<td className="w-80">
												<img className="product-image" src={product.image} alt="product" />
											</td>
											<td>
												<Typography
													component={Link}
													to={`/apps/e-commerce/products/${product.id}`}
													className="truncate"
													style={{
														color: 'inherit',
														textDecoration: 'underline'
													}}
												>
													{product.name}
												</Typography>
											</td>
											<td className="w-64 text-right">
												<span className="truncate">${product.price}</span>
											</td>
											<td className="w-64 text-right">
												<span className="truncate">{product.quantity}</span>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					)}
				</div>
			}
			innerScroll
		/>
	);
}

export default withReducer('eCommerceApp', reducer)(Cart);
