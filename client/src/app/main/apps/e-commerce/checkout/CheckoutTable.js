// import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, useParams } from 'react-router-dom';
// import OrdersStatus from '../order/OrdersStatus';
import * as Actions from '../store/actions';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
// import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
// import CheckoutTableHead from './CheckoutTableHead';
// import { Link, useParams } from 'react-router-dom';
import TableHead from '@material-ui/core/TableHead';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { useDeepCompareEffect } from '@fuse/hooks';
import reducer from '../store/reducers';

function CheckoutTable(props) {
	const dispatch = useDispatch();
	const order = useSelector(({ eCommerceApp }) => eCommerceApp.order);
	const routeParams = useParams();
	// const [tabValue, setTabValue] = useState(0);
	// const [map, setMap] = useState('shipping');

	useDeepCompareEffect(() => {
		dispatch(Actions.getOrder(routeParams));
	}, [dispatch, routeParams]);
	// const dispatch = useDispatch();
	// const order = useSelector(({ eCommerceApp }) => eCommerceApp.order);
	// const [data, setData] = useState(order);
	// const [orderProducts, setOrderProducts] = useState({
	// 	direction: 'asc',
	// 	id: routeParams
	// });
	//const order = useSelector(({ eCommerceApp }) => eCommerceApp.orders.data);
	// const products = useSelector(({ eCommerceApp }) => eCommerceApp.orders.data);
	// const routeParams = useParams();
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 2
	});

	// // checkoutOrder = () => {

	// // }

	// useEffect(() => {
	// 	dispatch(Actions.getOrder(routeParams));
	// 	// setData(Actions.getOrder(routeParams));
	// }, [dispatch, routeParams]);
	// classes={{
	// 	content: 'flex',
	// 	header: 'min-h-72 h-72 sm:h-136 sm:min-h-136'
	// }}
	return (
		<div className="flex-grow flex-shrink-0 p-0">
			{props.order && (
				<Card className="w-xl mx-auto" elevation={0}>
					<CardContent className="p-88 print:p-0">
						<div className="mt-64">
							<Table className="simple">
								<TableHead>
									<TableRow>
										<TableCell>PRODUCT</TableCell>
										<TableCell>PRICE</TableCell>
										<TableCell align="right">QUANTITY</TableCell>
										<TableCell align="right">TOTAL</TableCell>
									</TableRow>
								</TableHead>

								<TableBody>
									{props.order.products.map(product => (
										<TableRow key={product.id}>
											<TableCell>
												<Typography variant="subtitle1">{product.name}</Typography>
											</TableCell>
											<TableCell align="right">{formatter.format(product.price)}</TableCell>
											<TableCell align="right">{product.quantity}</TableCell>
											<TableCell align="right">
												{formatter.format(product.price * product.quantity)}
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>

							<Table className="simple mt-32">
								<TableBody>
									<TableRow>
										<TableCell>
											<Typography
												className="font-medium"
												variant="subtitle1"
												color="textSecondary"
											>
												SUBTOTAL
											</Typography>
										</TableCell>
										<TableCell align="right">
											<Typography
												className="font-medium"
												variant="subtitle1"
												color="textSecondary"
											>
												{formatter.format(props.order.subtotal)}
											</Typography>
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>
											<Typography
												className="font-medium"
												variant="subtitle1"
												color="textSecondary"
											>
												TAX
											</Typography>
										</TableCell>
										<TableCell align="right">
											<Typography
												className="font-medium"
												variant="subtitle1"
												color="textSecondary"
											>
												{formatter.format(props.order.tax)}
											</Typography>
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>
											<Typography
												className="font-medium"
												variant="subtitle1"
												color="textSecondary"
											>
												DISCOUNT
											</Typography>
										</TableCell>
										<TableCell align="right">
											<Typography
												className="font-medium"
												variant="subtitle1"
												color="textSecondary"
											>
												{formatter.format(props.order.discount)}
											</Typography>
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>
											<Typography className="font-light" variant="h4" color="textSecondary">
												TOTAL
											</Typography>
										</TableCell>
										<TableCell align="right">
											<Typography className="font-light" variant="h4" color="textSecondary">
												{formatter.format(props.order.total)}
											</Typography>
										</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</div>
					</CardContent>
				</Card>
			)}
		</div>
	);
}

export default withRouter(CheckoutTable);
