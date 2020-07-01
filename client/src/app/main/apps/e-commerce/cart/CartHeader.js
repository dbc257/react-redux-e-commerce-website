import FuseAnimate from '@fuse/core/FuseAnimate';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
// import Input from '@material-ui/core/Input';
// import Paper from '@material-ui/core/Paper';
// import { ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useSelector } from 'react-redux';
// import * as Actions from '../store/actions';
import { useTheme } from '@material-ui/core/styles';
// import _ from '@lodash';
import { Link } from 'react-router-dom';

function CartHeader(props) {
	// const dispatch = useDispatch();
	const order = useSelector(({ eCommerceApp }) => eCommerceApp.order);
	// const routeParams = useParams();
	const theme = useTheme();

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

				<div className="flex flex-col min-w-0 items-center sm:items-start">
					{/* {order != null ? (
						<FuseAnimate animation="transition.slideLeftIn" delay={300}>
							<Typography className="text-16 sm:text-20 truncate">{`Order ${order.reference}`}</Typography>
						</FuseAnimate>
					) : null} */}

					{order != null ? (
						<FuseAnimate animation="transition.slideLeftIn" delay={300}>
							<Typography variant="caption">
								{`${order.customer.firstName} ${order.customer.lastName}'s Shopping Cart`}
							</Typography>
						</FuseAnimate>
					) : null}
				</div>
			</div>

			<div>
				<FuseAnimate animation="transition.slideRightIn" delay={300}>
					<Button
						className="whitespace-no-wrap normal-case"
						variant="contained"
						color="secondary"
						component={Link}
						to="/apps/e-commerce/checkout/1"
						// disabled={!canBeSubmitted()}
						// onClick={() => dispatch(Actions.saveProduct(form))}
					>
						<Icon>shopping_cart</Icon>
						Checkout
					</Button>
				</FuseAnimate>
			</div>
		</div>
	);
}

export default CartHeader;
