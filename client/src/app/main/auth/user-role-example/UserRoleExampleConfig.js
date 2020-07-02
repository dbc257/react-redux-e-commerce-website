import { authRoles } from 'app/auth';
import UserRoleExample from './UserRoleExample';

const UserRoleExampleConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.user, // ['user']
	routes: [
		{
			path: '/auth/user-role-example',
			component: UserRoleExample
		}
	]
};

export default UserRoleExampleConfig;
