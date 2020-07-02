import FusePageSimple from '@fuse/core/FusePageSimple';
import withReducer from 'app/store/withReducer';
import reducer from '../store/reducers';
import Icon from '@material-ui/core/Icon';
import clsx from 'clsx';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import * as Actions from '../store/actions';
import Typography from '@material-ui/core/Typography';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FuseAnimate from '@fuse/core/FuseAnimate';
// import Button from '@material-ui/core/Button';
import { useTheme } from '@material-ui/core/styles';
import { useDeepCompareEffect } from '@fuse/hooks';

function Product(props) {
	const dispatch = useDispatch();
	const product = useSelector(({ eCommerceApp }) => eCommerceApp.product);
	const routeParams = useParams();
	const theme = useTheme();

	useDeepCompareEffect(() => {
		function updateProductState() {
			const { productId } = routeParams;

			if (productId === 'new') {
				dispatch(Actions.newProduct());
			} else {
				dispatch(Actions.getProduct(routeParams));
			}
		}

		updateProductState();
	}, [dispatch, routeParams]);

	useEffect(() => {
		dispatch(Actions.getProduct(routeParams));
	}, [dispatch, routeParams]);

	return (
		<FusePageSimple
			classes={{
				content: 'flex',
				header: 'min-h-72 h-72 sm:h-136 sm:min-h-136'
			}}
			header={
				<div className="flex flex-1 w-full items-center justify-between">
					<div className="flex flex-col items-start max-w-full">
						<FuseAnimate animation="transition.slideRightIn" delay={300}>
							<Typography
								className="normal-case flex items-center sm:mb-12"
								component={Link}
								role="button"
								to="/apps/e-commerce/products"
								color="inherit"
							>
								<Icon className="text-20">
									{theme.direction === 'ltr' ? 'arrow_back' : 'arrow_forward'}
								</Icon>
								<span className="mx-4">Products</span>
							</Typography>
						</FuseAnimate>
						<div className="flex items-center max-w-full">
							<FuseAnimate animation="transition.expandIn" delay={300}>
								{product.data != null ? (
									<img
										className="w-32 sm:w-48 rounded"
										src={product.data.image}
										alt={product.data.name}
									/>
								) : (
									<img
										className="w-32 sm:w-48 rounded"
										src="assets/images/ecommerce/product-image-placeholder.png"
										alt="product"
									/>
								)}
							</FuseAnimate>
							<div className="flex flex-col min-w-0 mx-8 sm:mc-16">
								{product.data != null ? (
									<FuseAnimate animation="transition.slideLeftIn" delay={300}>
										<Typography className="text-16 sm:text-20 truncate">
											{product.data.name}
										</Typography>
									</FuseAnimate>
								) : null}
								<FuseAnimate animation="transition.slideLeftIn" delay={300}>
									<Typography variant="caption">Product Details</Typography>
								</FuseAnimate>
							</div>
						</div>
					</div>
					{/* <div>
						<FuseAnimate animation="transition.slideRightIn" delay={300}>
							<Button
								className="whitespace-no-wrap normal-case"
								variant="contained"
								color="secondary"
								component={Link}
								to="/apps/e-commerce/cart/1"
							>
								<Icon>add_shopping_cart</Icon>
								Add To Cart
							</Button>
						</FuseAnimate>
					</div> */}
				</div>
			}
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

									<div className="mb-24">
										<Typography className="font-bold mb-4 text-15">Categories</Typography>
										<div className="flex items-center" key={product.data.categories}>
											<Icon className="text-16 mx-4" color="action">
												location_on
											</Icon>
											<Typography>{product.data.categories}</Typography>
										</div>
									</div>

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
