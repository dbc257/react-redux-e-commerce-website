import FuseAnimate from '@fuse/core/FuseAnimate';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import { ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../store/actions';
import { useTheme } from '@material-ui/core/styles';
import _ from '@lodash';
import { Link, useParams } from 'react-router-dom';

function ProductHeader(props) {
	// const dispatch = useDispatch();
	const product = useSelector(({ eCommerceApp }) => eCommerceApp.product);
	const theme = useTheme();
	const routeParams = useParams();

	return (
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
						<Icon className="text-20">{theme.direction === 'ltr' ? 'arrow_back' : 'arrow_forward'}</Icon>
						<span className="mx-4">Products</span>
					</Typography>
				</FuseAnimate>

				<div className="flex items-center max-w-full">
					<FuseAnimate animation="transition.expandIn" delay={300}>
						{product.data != null ? (
							<img
								className="w-32 sm:w-48 rounded"
								src={_.find(product.data.images, { id: product.data.featuredImageId }).url}
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
								<Typography className="text-16 sm:text-20 truncate">{product.data.name}</Typography>
							</FuseAnimate>
						) : null}
						<FuseAnimate animation="transition.slideLeftIn" delay={300}>
							<Typography variant="caption">Product Details</Typography>
						</FuseAnimate>
					</div>
				</div>
			</div>
			<div>
				<FuseAnimate animation="transition.slideRightIn" delay={300}>
					<Button
						className="whitespace-no-wrap normal-case"
						variant="contained"
						color="secondary"
						component={Link}
						to="/apps/e-commerce/cart/1"
						// disabled={!canBeSubmitted()}
						// onClick={() => dispatch(Actions.saveProduct(form))}
					>
						<Icon>add_shopping_cart</Icon>
						Add To Cart
					</Button>
				</FuseAnimate>
			</div>
		</div>
	);
}

export default ProductHeader;
