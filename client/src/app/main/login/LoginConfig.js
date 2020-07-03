import { authRoles } from 'app/auth';
// import React from 'react';
// import { Redirect } from 'react-router-dom';
import Login from './Login';

const LoginConfig = {
	settings: {
		layout: {
			config: {
				navbar: {
					display: false
				},
				toolbar: {
					display: false
				},
				footer: {
					display: false
				},
				leftSidePanel: {
					display: false
				},
				rightSidePanel: {
					display: false
				}
			}
		}
	},
	auth: authRoles.onlyGuest,
	routes: [
		{
			path: '/login',
			component: Login
		}
	]
};

export default LoginConfig;
