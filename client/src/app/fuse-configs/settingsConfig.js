const settingsConfig = {
	layout: {
		style: 'layout1', // layout-1 layout-2 layout-3
		config: {
			title: 'Layout 1 - Vertical',
			defaults: {
				mode: 'fullwidth',
				scroll: 'content',
				navbar: {
					display: true,
					folded: false,
					position: 'left'
				},
				toolbar: {
					display: true,
					style: 'fixed',
					position: 'below'
				},
				footer: {
					display: true,
					style: 'fixed',
					position: 'below'
				},
				leftSidePanel: {
					display: true
				},
				rightSidePanel: {
					display: true
				}
			},
			form: {
				mode: {
					title: 'Mode',
					type: 'radio',
					options: [
						{
							name: 'Boxed',
							value: 'boxed'
						},
						{
							name: 'Full Width',
							value: 'fullwidth'
						}
					]
				},
				scroll: {
					title: 'Scrollable Area',
					type: 'radio',
					options: [
						{
							name: 'Body',
							value: 'body'
						},
						{
							name: 'Content',
							value: 'content'
						}
					]
				},
				navbar: {
					type: 'group',
					title: 'Navbar',
					children: {
						display: {
							title: 'Display',
							type: 'switch'
						},
						folded: {
							title: 'Folded',
							type: 'switch'
						},
						position: {
							title: 'Position',
							type: 'radio',
							options: [
								{
									name: 'Left',
									value: 'left'
								},
								{
									name: 'Right',
									value: 'right'
								}
							]
						}
					}
				},
				toolbar: {
					type: 'group',
					title: 'Toolbar',
					children: {
						display: {
							title: 'Display',
							type: 'switch'
						},
						style: {
							title: 'Style',
							type: 'radio',
							options: [
								{
									name: 'Fixed',
									value: 'fixed'
								},
								{
									name: 'Static',
									value: 'static'
								}
							]
						},
						position: {
							title: 'Position',
							type: 'radio',
							options: [
								{
									name: 'Above',
									value: 'above'
								},
								{
									name: 'Below',
									value: 'below'
								}
							]
						}
					}
				},
				footer: {
					type: 'group',
					title: 'Footer',
					children: {
						display: {
							title: 'Display',
							type: 'switch'
						},
						style: {
							title: 'Style',
							type: 'radio',
							options: [
								{
									name: 'Fixed',
									value: 'fixed'
								},
								{
									name: 'Static',
									value: 'static'
								}
							]
						},
						position: {
							title: 'Position',
							type: 'radio',
							options: [
								{
									name: 'Above',
									value: 'above'
								},
								{
									name: 'Below',
									value: 'below'
								}
							]
						}
					}
				}
			}
		} // checkout default layout configs at app/fuse-layouts for example  app/fuse-layouts/layout1/Layout1Config.js
	},
	customScrollbars: true,
	animations: true,
	direction: 'ltr', // rtl, ltr
	theme: {
		main: 'tech',
		navbar: 'tech',
		toolbar: 'tech',
		footer: 'tech'
	}
};

export default settingsConfig;
