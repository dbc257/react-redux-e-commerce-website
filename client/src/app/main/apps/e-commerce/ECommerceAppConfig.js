import React from 'react';
import { Redirect } from 'react-router-dom';
import { authRoles } from 'app/auth';

const ECommerceAppConfig = {
	settings: {
		layout: {}
	},
	routes: [
		{
			path: '/apps/e-commerce/checkout/:orderId',
			auth: authRoles.user, // ['user']
			component: React.lazy(() => import('./checkout/Checkout'))
		},
		{
			path: '/apps/e-commerce/cart/:orderId',
			auth: authRoles.user, // ['user']
			component: React.lazy(() => import('./cart/Cart'))
		},
		{
			path: '/apps/e-commerce/products/:productId/:productHandle?',
			component: React.lazy(() => import('./product/Product'))
		},
		{
			path: '/apps/e-commerce/products',
			component: React.lazy(() => import('./products/Products'))
		},
		{
			path: '/apps/e-commerce/orders/:orderId',
			auth: authRoles.admin, //['admin']
			component: React.lazy(() => import('./order/Order'))
		},
		{
			path: '/apps/e-commerce/orders',
			auth: authRoles.admin, //['admin']
			component: React.lazy(() => import('./orders/Orders'))
		},
		{
			path: '/apps/e-commerce',
			component: () => <Redirect to="/apps/e-commerce/products" />
		}
	]
};

export default ECommerceAppConfig;
