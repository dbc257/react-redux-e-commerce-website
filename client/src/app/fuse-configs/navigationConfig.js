import { authRoles } from 'app/auth';
// import MaterialUIComponentsNavigation from 'app/main/documentation/material-ui-components/MaterialUIComponentsNavigation';
// import i18next from 'i18next';
// import ar from './navigation-i18n/ar';
// import en from './navigation-i18n/en';
// import tr from './navigation-i18n/tr';

// i18next.addResourceBundle('en', 'navigation', en);
// i18next.addResourceBundle('tr', 'navigation', tr);
// i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
	{
		id: 'e-commerce',
		title: 'E-Commerce',
		translate: 'ECOMMERCE',
		type: 'collapse',
		icon: 'shopping_cart',
		url: '/apps/e-commerce',
		children: [
			{
				id: 'e-commerce-products',
				title: 'Products',
				type: 'item',
				url: '/apps/e-commerce/products',
				icon: 'face',
				exact: true
			},
			{
				id: 'e-commerce-product-detail',
				title: 'Product Detail',
				type: 'item',
				url: '/apps/e-commerce/products/1/a-walk-amongst-friends-canvas-print',
				icon: 'face',
				exact: true
			},
			// {
			// 	id: 'e-commerce-new-product',
			// 	title: 'New Product',
			// 	type: 'item',
			// 	url: '/apps/e-commerce/products/new',
			// 	exact: true
			// },
			{
				id: 'e-commerce-cart',
				title: 'Cart',
				type: 'item',
				auth: authRoles.user, // ['user']
				url: '/apps/e-commerce/cart/1',
				icon: 'account_circle',
				exact: true
			},
			{
				id: 'e-commerce-checkout',
				title: 'Checkout',
				type: 'item',
				auth: authRoles.user, // ['user']
				url: '/apps/e-commerce/checkout/1',
				icon: 'account_circle',
				exact: true
			},
			{
				id: 'e-commerce-orders',
				title: 'Orders',
				type: 'item',
				auth: authRoles.admin, //['admin']
				url: '/apps/e-commerce/orders',
				icon: 'verified_user',
				exact: true
			},
			{
				id: 'e-commerce-order-detail',
				title: 'Order Detail',
				type: 'item',
				auth: authRoles.admin, //['admin']
				url: '/apps/e-commerce/orders/1',
				icon: 'verified_user',
				exact: true
			}
		]
	}
];

export default navigationConfig;
