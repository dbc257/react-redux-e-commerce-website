import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import PoweredByLinks from 'app/fuse-layouts/shared-components/PoweredByLinks';
import React from 'react';
import { useSelector } from 'react-redux';

function FooterLayout1(props) {
	const footerTheme = useSelector(({ fuse }) => fuse.settings.footerTheme);
	return (
		<ThemeProvider theme={footerTheme}>
			<AppBar
				id="fuse-footer"
				className="relative z-10"
				color="default"
				style={{ backgroundColor: footerTheme.palette.background.default }}
			>
				<Toolbar className="px-16 py-0 flex items-center">
					<div>
						<PoweredByLinks />
					</div>
				</Toolbar>
			</AppBar>
		</ThemeProvider>
	);
}

export default React.memo(FooterLayout1);
