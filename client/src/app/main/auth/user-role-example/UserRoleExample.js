import FuseHighlight from '@fuse/core/FuseHighlight';
import FusePageSimple from '@fuse/core/FusePageSimple';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import * as authActions from 'app/auth/store/actions';
import React from 'react';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles(theme => ({
	layoutRoot: {}
}));

function UserRoleExample(props) {
	const dispatch = useDispatch();

	const classes = useStyles();

	return (
		<FusePageSimple
			classes={{
				root: classes.layoutRoot
			}}
			header={
				<div className="flex flex-1 items-center justify-between p-24">
					<Typography className="h2">User: Auth role example page</Typography>
					<Button
						className="normal-case"
						variant="contained"
						onClick={ev => dispatch(authActions.logoutUser())}
					>
						<Icon>exit_to_app</Icon>
						<span className="mx-4">Logout</span>
					</Button>
				</div>
			}
			content={
				<div className="p-24">
					<Typography className="mb-24">
						You can see this page because you have logged in and have permission. Otherwise you should be
						redirected to login page.
					</Typography>

					<Typography className="mb-24">This is the page's config file:</Typography>

					<FuseHighlight component="pre" className="language-js">
						{`
                            import {authRoles} from 'auth';
                            import UserRoleExample from 'app/main/auth/user-role-example/UserRoleExample';

                            export const UserRoleExampleConfig = {
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
                            `}
					</FuseHighlight>

					<Typography className="my-24">
						You can also hide the navigation item/collapse/group with user roles by giving auth property.
					</Typography>

					<FuseHighlight component="pre" className="language-json">
						{`
                                export const fuseNavigationConfig = [
                                   {
                                        'id'   : 'only-staff-navigation-item',
                                        'title': 'Nav item only for Staff',
                                        'type' : 'item',
                                        'auth' : authRoles.user,//['user']
                                        'url'  : '/auth/user-role-example',
                                        'icon' : 'account_circle'
                                    }
                                ];
                            `}
					</FuseHighlight>
				</div>
			}
		/>
	);
}

export default UserRoleExample;
