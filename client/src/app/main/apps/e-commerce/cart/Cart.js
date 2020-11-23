import FusePageSimple from '@fuse/core/FusePageSimple';
import withReducer from 'app/store/withReducer';
import React from 'react';
import reducer from '../store/reducers';
import CartHeader from './CartHeader';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../store/actions';
import { useDeepCompareEffect } from '@fuse/hooks';
import Typography from '@material-ui/core/Typography';
import { Link, useParams } from 'react-router-dom';

function Cart(props) {
	const routeParams = useParams();
	const dispatch = useDispatch();
	const order = useSelector(({ eCommerceApp }) => eCommerceApp.order);

	useDeepCompareEffect(() => {
		dispatch(Actions.getOrder(routeParams));
	}, [dispatch, routeParams]);

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
