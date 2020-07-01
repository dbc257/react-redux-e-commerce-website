import FusePageSimple from '@fuse/core/FusePageSimple';
// import FusePageCarded from '@fuse/core/FusePageCarded';
import withReducer from 'app/store/withReducer';
// import React from 'react';
import reducer from '../store/reducers';
import ProductHeader from './ProductHeader';
// import ProductTable from './ProductTable';
import Icon from '@material-ui/core/Icon';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import * as Actions from '../store/actions';
import Typography from '@material-ui/core/Typography';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

function Product(props) {
	const dispatch = useDispatch();
	const product = useSelector(({ eCommerceApp }) => eCommerceApp.product);
	const routeParams = useParams();
	const [data, setData] = useState(product);

	useEffect(() => {
		dispatch(Actions.getProduct(routeParams));
	}, [dispatch, routeParams]);

	return (
		<FusePageSimple
			classes={{
				content: 'flex',
				header: 'min-h-72 h-72 sm:h-136 sm:min-h-136'
			}}
			header={<ProductHeader />}
			content={
				<div className="w-full flex flex-col">
					{product.data != null ? (
						<FuseAnimateGroup
							enter={{
								animation: 'transition.slideUpBigIn'
							}}
						>
							<Card className="w-full mb-16">
								<CardContent>
									<div className="mb-24">
										<Typography className="font-bold mb-4 text-15">Product Name</Typography>
										<Typography>{product.data.name}</Typography>
									</div>

									<div className="mb-24">
										<Typography className="font-bold mb-4 text-15">Description</Typography>
										<Typography>{product.data.description}</Typography>
									</div>

									{/* <div className="mb-24">
										<Typography className="font-bold mb-4 text-15">Categories</Typography>

										{product.data.categories.map(c => (
											<div className="flex items-center" key={c}>
												<Icon className="text-16 mx-4" color="action">
													location_on
												</Icon>
												<Typography>{c}</Typography>
											</div>
										))}
									</div> */}

									<div className="mb-24">
										<Typography className="font-bold mb-4 text-15">Price</Typography>
										<Typography>
											<span>$</span>
											{product.data.priceTaxIncl}
										</Typography>
									</div>
									<div className="mb-24">
										<Typography className="font-bold mb-4 text-15">Quantity</Typography>
										<Typography>
											{product.data.quantity}
											<i
												className={clsx(
													'inline-block w-8 h-8 rounded mx-8',
													product.data.quantity <= 5 && 'bg-red',
													product.data.quantity > 5 &&
														product.data.quantity <= 25 &&
														'bg-orange',
													product.data.quantity > 25 && 'bg-green'
												)}
											/>
										</Typography>
									</div>
								</CardContent>
							</Card>
						</FuseAnimateGroup>
					) : null}
				</div>
			}
			innerScroll
		/>
	);
}

export default withReducer('eCommerceApp', reducer)(Product);
