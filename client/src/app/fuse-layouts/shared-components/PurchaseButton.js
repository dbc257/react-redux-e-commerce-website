import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import React from 'react';
// import { Link } from 'react-router-dom';

function PurchaseButton() {
	return (
		<Button
			// component={Link}
			to="/apps/e-commerce/orders"
			target="_blank"
			rel="noreferrer noopener"
			role="button"
			className="normal-case"
			variant="contained"
			color="secondary"
		>
			<Icon className="text-16">shopping_cart</Icon>
			<span className="mx-4">Shopping Cart</span>
		</Button>
	);
}

export default PurchaseButton;
