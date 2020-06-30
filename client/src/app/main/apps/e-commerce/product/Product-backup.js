import FuseAnimate from '@fuse/core/FuseAnimate';
// import FuseChipSelect from '@fuse/core/FuseChipSelect';
// import FuseLoading from '@fuse/core/FuseLoading';
import FusePageCarded from '@fuse/core/FusePageCarded';
// import { useForm, useDeepCompareEffect } from '@fuse/hooks';
// import FuseUtils from '@fuse/utils';
import _ from '@lodash';
import Button from '@material-ui/core/Button';
// mport { orange } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';
// import InputAdornment from '@material-ui/core/InputAdornment';
import { useTheme } from '@material-ui/core/styles';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
// import Tabs from '@material-ui/core/Tabs';
// import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import withReducer from 'app/store/withReducer';
import clsx from 'clsx';
// import React, { useEffect, useState } from 'react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom';
import * as Actions from '../store/actions';
import reducer from '../store/reducers';

import FuseScrollbars from '@fuse/core/FuseScrollbars';
// import _ from '@lodash';
// import Checkbox from '@material-ui/core/Checkbox';
// import Icon from '@material-ui/core/Icon';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
// import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
// import clsx from 'clsx';
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { withRouter } from 'react-router-dom';
// import * as Actions from '../store/actions';
// import ProductsTableHead from './ProductsTableHead';
// const useStyles = makeStyles(theme => ({
// 	productImageFeaturedStar: {
// 		position: 'absolute',
// 		top: 0,
// 		right: 0,
// 		color: orange[400],
// 		opacity: 0
// 	},
// 	productImageUpload: {
// 		transitionProperty: 'box-shadow',
// 		transitionDuration: theme.transitions.duration.short,
// 		transitionTimingFunction: theme.transitions.easing.easeInOut
// 	},
// 	productImageItem: {
// 		transitionProperty: 'box-shadow',
// 		transitionDuration: theme.transitions.duration.short,
// 		transitionTimingFunction: theme.transitions.easing.easeInOut,
// 		'&:hover': {
// 			'& $productImageFeaturedStar': {
// 				opacity: 0.8
// 			}
// 		},
// 		'&.featured': {
// 			pointerEvents: 'none',
// 			boxShadow: theme.shadows[3],
// 			'& $productImageFeaturedStar': {
// 				opacity: 1
// 			},
// 			'&:hover $productImageFeaturedStar': {
// 				opacity: 1
// 			}
// 		}
// 	}
// }));

function Product(props) {
	const dispatch = useDispatch();
	const product = useSelector(({ eCommerceApp }) => eCommerceApp.product);
	const theme = useTheme();

	// const classes = useStyles(props);
	// const [tabValue, setTabValue] = useState(0);
	// const { form, handleChange, setForm } = useForm(null);
	const routeParams = useParams();

	// useDeepCompareEffect(() => {
	// 	function updateProductState() {
	// 		const { productId } = routeParams;

	// 		if (productId === 'new') {
	// 			dispatch(Actions.newProduct());
	// 		} else {
	// 			dispatch(Actions.getProduct(routeParams));
	// 		}
	// 	}

	// 	updateProductState();
	// }, [dispatch, routeParams]);

	// useEffect(() => {
	// 	if ((product.data)) {
	// 		setForm(product.data);
	// 	}
	// }, []);
	useEffect(() => {
		dispatch(Actions.getProduct(routeParams));
	}, [dispatch, routeParams]);
	// form, product.data, setForm
	// function handleChangeTab(event, value) {
	// 	setTabValue(value);
	// }

	// function handleChipChange(value, name) {
	// 	setForm(
	// 		_.set(
	// 			{ ...form },
	// 			name,
	// 			value.map(item => item.value)
	// 		)
	// 	);
	// }

	// function setFeaturedImage(id) {
	// 	setForm(_.set({ ...form }, 'featuredImageId', id));
	// }

	// function handleUploadChange(e) {
	// 	const file = e.target.files[0];
	// 	if (!file) {
	// 		return;
	// 	}
	// 	const reader = new FileReader();
	// 	reader.readAsBinaryString(file);

	// 	reader.onload = () => {
	// 		setForm(
	// 			_.set({ ...form }, `images`, [
	// 				{
	// 					id: FuseUtils.generateGUID(),
	// 					url: `data:${file.type};base64,${btoa(reader.result)}`,
	// 					type: 'image'
	// 				},
	// 				...form.images
	// 			])
	// 		);
	// 	};

	// 	reader.onerror = () => {
	// 		console.log('error on load image');
	// 	};
	// }

	// function canBeSubmitted() {
	// 	return form.name.length > 0 && !_.isEqual(product.data, form);
	// }

	// if (
	// 	(!product.data || (product.data && routeParams.productId !== product.data.id)) &&
	// 	routeParams.productId !== 'new'
	// ) {
	// 	return <FuseLoading />;
	// }

	return (
		<FusePageCarded
			classes={{
				toolbar: 'p-0',
				header: 'min-h-72 h-72 sm:h-136 sm:min-h-136'
			}}
			header={
				// form && (
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
								<Icon className="text-20">
									{theme.direction === 'ltr' ? 'arrow_back' : 'arrow_forward'}
								</Icon>
								<span className="mx-4">Products</span>
							</Typography>
						</FuseAnimate>

						<div className="flex items-center max-w-full">
							<FuseAnimate animation="transition.expandIn" delay={300}>
								{/* <img
								className="w-32 sm:w-48 rounded"
								src={product.data.image}
								alt={product.data.name}
							/> */}

								{/* <img
									className="w-32 sm:w-48 rounded"
									src="assets/images/ecommerce/product-image-placeholder.png"
									alt={product.data.name}
								/> */}
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
										<Typography className="text-16 sm:text-20 truncate">
											{product.data.name}
										</Typography>
									</FuseAnimate>
								) : null}
								<FuseAnimate animation="transition.slideLeftIn" delay={300}>
									<Typography variant="caption">Product Details</Typography>
								</FuseAnimate>
							</div>
						</div>
					</div>
					<FuseAnimate animation="transition.slideRightIn" delay={300}>
						<Button
							className="whitespace-no-wrap normal-case"
							variant="contained"
							color="secondary"
							// disabled={!canBeSubmitted()}
							// onClick={() => dispatch(Actions.saveProduct(form))}
						>
							<Icon>add_shopping_cart</Icon>
							Add To Cart
						</Button>
					</FuseAnimate>
				</div>
				// )
			}
			contentToolbar={
				// <div className="px-24">
				// 	<h4>Content Toolbar</h4>
				// </div>
				<div className="h-64 normal-case">
					{/* <label>Basic Info</label> */}
					<Tab className="h-64 normal-case" label="Basic Info" />
					{/* <h4>Content Toolbar</h4> */}
				</div>
				/* <Tabs
					value={tabValue}
					onChange={handleChangeTab}
					indicatorColor="primary"
					textColor="primary"
					variant="scrollable"
					scrollButtons="auto"
					classes={{ root: 'w-full h-64' }}
				>
					<Tab className="h-64 normal-case" label="Basic Info" />
					<Tab className="h-64 normal-case" label="Product Images" />
					<Tab className="h-64 normal-case" label="Pricing" />
					<Tab className="h-64 normal-case" label="Inventory" />
					<Tab className="h-64 normal-case" label="Shipping" />
				</Tabs> */
			}
			content={
				<div className="w-full flex flex-col">
					<FuseScrollbars className="flex-grow overflow-x-auto">
						<Table className="min-w-xl" aria-labelledby="tableTitle">
							<TableBody>
								{/* return ( */}
								{product.data != null ? (
									<TableRow
										className="h-64"
										// hover
										// role="checkbox"
										// aria-checked={isSelected}
										// tabIndex={-1}
										// key={product.data.id}
										// selected={isSelected}
										// onClick={event => handleClick(n)}
									>
										<TableCell className="w-52" component="th" scope="row" padding="none">
											{product.data != null ? (
												<img
													className="w-full block rounded"
													src={
														_.find(product.data.images, {
															id: product.data.featuredImageId
														}).url
													}
													alt={product.data.name}
												/>
											) : (
												<img
													className="w-full block rounded"
													src="assets/images/ecommerce/product-image-placeholder.png"
													alt="product"
												/>
											)}
										</TableCell>

										{product.data != null ? (
											<TableCell component="th" scope="row">
												{product.data.name}
											</TableCell>
										) : null}
										<TableCell component="th" scope="row">
											<span>$</span>
											{product.data.priceTaxIncl}
										</TableCell>
										<TableCell component="th" scope="row">
											{product.data.quantity}
											<i
												className={clsx(
													'inline-block w-8 h-8 rounded mx-8',
													product.data.quantity <= 5 && 'bg-red',
													product.data.quantity > 5 &&
														product.data.quantity <= 25 &&
														'bg-orange',
													product.data.quantity > 25 && 'bg-green'
												)}
											/>
										</TableCell>
									</TableRow>
								) : null}
								{product.data != null ? (
									<TableRow
										className="h-64 w-52"
										component="th"
										scope="row"
										padding="none"
										// hover
										// role="checkbox"
										// aria-checked={isSelected}
										// tabIndex={-1}
										// key={product.data.id}
										// selected={isSelected}
										// onClick={event => handleClick(n)}
									>
										{product.data != null ? (
											// <TableCell
											// 	className="w-full block rounded"
											// 	component="th"
											// 	scope="row"
											// 	padding="none"
											// >
											<Typography
												className="mt-8 mb-16"
												// variant="h6"
												id="description"
												name="description"
												// onChange={handleChange}
												label="Description"
												type="text"
												// value=
												// multiline
												// rows={5}
												// variant="outlined"
												fullWidth
												gutterBottom
											>
												{product.data.description}
											</Typography>
										) : // </TableCell>
										null}
									</TableRow>
								) : null}
								{/* {product.data != null ? (
									<TableRow
										className="h-64"

										// role="checkbox"
										// aria-checked={isSelected}
										// tabIndex={-1}
										// key={product.data.id}
										// selected={isSelected}
										// onClick={event => handleClick(n)}
									>
										{product.data != null ? (
											<TableCell
											component="th" scope="row" align="right"
											>
												<span>$</span>
												{product.data.priceTaxIncl}
											</TableCell>
										) : null}
									</TableRow>
								) : null}

								{product.data != null ? (
									<TableRow
										className="h-64"

										// role="checkbox"
										// aria-checked={isSelected}
										// tabIndex={-1}
										// key={product.data.id}
										// selected={isSelected}
										// onClick={event => handleClick(n)}
									>
										{product.data != null ? (
											<TableCell
											component="th" scope="row" align="right"
											>
												{product.data.quantity}
												<i
													className={clsx(
														'inline-block w-8 h-8 rounded mx-8',
														product.data.quantity <= 5 && 'bg-red',
														product.data.quantity > 5 &&
															product.data.quantity <= 25 &&
															'bg-orange',
														product.data.quantity > 25 && 'bg-green'
													)}
												/>
											</TableCell>
										) : null}
									</TableRow>
								) : null}
								{/* <TableCell component="th" scope="row" align="right">
											{n.active ? (
												<Icon className="text-green text-20">check_circle</Icon>
											) : (
												<Icon className="text-red text-20">remove_circle</Icon>
											)}
										</TableCell> */}
								{/* </TableRow> */}
							</TableBody>
						</Table>
					</FuseScrollbars>
				</div>
			}
			innerScroll
		/>
	);
}
// <FusePageCarded
// 	classes={{
// 		toolbar: 'p-0',
// 		header: 'min-h-72 h-72 sm:h-136 sm:min-h-136'
// 	}}
// 	header={
// 		// form && (
// 		<div className="flex flex-1 w-full items-center justify-between">
// 			<div className="flex flex-col items-start max-w-full">
// 				<FuseAnimate animation="transition.slideRightIn" delay={300}>
// 					<Typography
// 						className="normal-case flex items-center sm:mb-12"
// 						component={Link}
// 						role="button"
// 						to="/apps/e-commerce/products"
// 						color="inherit"
// 					>
// 						<Icon className="text-20">
// 							{theme.direction === 'ltr' ? 'arrow_back' : 'arrow_forward'}
// 						</Icon>
// 						<span className="mx-4">Products</span>
// 					</Typography>
// 				</FuseAnimate>

// 				<div className="flex items-center max-w-full">
// 					<FuseAnimate animation="transition.expandIn" delay={300}>
// 						{/* <img
// 							className="w-32 sm:w-48 rounded"
// 							src={product.data.image}
// 							alt={product.data.name}
// 						/> */}

// 						{/* <img
// 								className="w-32 sm:w-48 rounded"
// 								src="assets/images/ecommerce/product-image-placeholder.png"
// 								alt={product.data.name}
// 							/> */}
// 						{product.data != null ? (
// 							<img
// 								className="w-32 sm:w-48 rounded"
// 								src={_.find(product.data.images, { id: product.data.featuredImageId }).url}
// 								alt={product.data.name}
// 							/>
// 						) : (
// 							<img
// 								className="w-32 sm:w-48 rounded"
// 								src="assets/images/ecommerce/product-image-placeholder.png"
// 								alt="product"
// 							/>
// 						)}
// 					</FuseAnimate>
// 					<div className="flex flex-col min-w-0 mx-8 sm:mc-16">
// 						{product.data != null ? (
// 							<FuseAnimate animation="transition.slideLeftIn" delay={300}>
// 								<Typography className="text-16 sm:text-20 truncate">
// 									{product.data.name}
// 								</Typography>
// 							</FuseAnimate>
// 						) : null}
// 						<FuseAnimate animation="transition.slideLeftIn" delay={300}>
// 							<Typography variant="caption">Product Details</Typography>
// 						</FuseAnimate>
// 					</div>
// 				</div>
// 			</div>
// 			<FuseAnimate animation="transition.slideRightIn" delay={300}>
// 				<Button
// 					className="whitespace-no-wrap normal-case"
// 					variant="contained"
// 					color="secondary"
// 					// disabled={!canBeSubmitted()}
// 					// onClick={() => dispatch(Actions.saveProduct(form))}
// 				>
// 					<Icon>add_shopping_cart</Icon>
// 					Add To Cart
// 				</Button>
// 			</FuseAnimate>
// 		</div>
// 		// )
// 	}
// contentToolbar={
// 			// <div className="px-24">
// 			// 	<h4>Content Toolbar</h4>
// 			// </div>
// 			<div className="h-64 normal-case">
// 				{/* <label>Basic Info</label> */}
// 				<Tab className="h-64 normal-case" label="Basic Info" />
// 				{/* <h4>Content Toolbar</h4> */}
// 			</div>
// 			/* <Tabs
// 				value={tabValue}
// 				onChange={handleChangeTab}
// 				indicatorColor="primary"
// 				textColor="primary"
// 				variant="scrollable"
// 				scrollButtons="auto"
// 				classes={{ root: 'w-full h-64' }}
// 			>
// 				<Tab className="h-64 normal-case" label="Basic Info" />
// 				<Tab className="h-64 normal-case" label="Product Images" />
// 				<Tab className="h-64 normal-case" label="Pricing" />
// 				<Tab className="h-64 normal-case" label="Inventory" />
// 				<Tab className="h-64 normal-case" label="Shipping" />
// 			</Tabs> */
// 		}
// 			content={
// 				// form && (
// 				<div className="p-16 sm:p-24 max-w-2xl">
// 					{product.data != null ? (
// 						<div>
// 							<Typography
// 								className="text-16 sm:text-20 truncate"
// 								// error={form.name === ''}
// 								// required
// 								// label="Name"
// 								// autoFocus
// 								// id="name"
// 								name="name"
// 								// value={product.data.name}
// 								// onChange={handleChange}
// 								// variant="outlined"
// 								// fullWidth
// 								gutterBottom
// 							>
// 								{product.data.name}
// 							</Typography>
// 						</div>
// 					) : null}
// 					{product.data != null ? (
// 						<div>
// <Typography
// 	// className="mt-8 mb-16"
// 	variant="h6"
// 	id="description"
// 	name="description"
// 	// onChange={handleChange}
// 	label="Description"
// 	type="text"
// 	// value=
// 	multiline
// 	// rows={5}
// 	variant="outlined"
// 	fullWidth
// 	gutterBottom
// >
// 	{product.data.description}
// </Typography>
// 						</div>
// 					) : null}
// 					{product.data != null ? (
// 						<div>
// 							<Typography
// 								className="mt-8 mb-16"
// 								label="Tax Included Price"
// 								id="priceTaxIncl"
// 								name="priceTaxIncl"
// 								// value=
// 								// onChange={handleChange}
// 								// InputProps={{
// 								// 	startAdornment: <InputAdornment position="start">$</InputAdornment>
// 								// }}
// 								type="number"
// 								variant="outlined"
// 								autoFocus
// 								fullWidth
// 								gutterBottom
// 							>
// 								$ {product.data.priceTaxIncl}
// 							</Typography>
// 						</div>
// 					) : null}
// 					{product.data != null ? (
// 						<div>
// 							<Typography
// 								className="mt-8 mb-16"
// 								label="Quantity"
// 								id="quantity"
// 								name="quantity"
// 								// value=
// 								// onChange={handleChange}
// 								variant="outlined"
// 								type="number"
// 								fullWidth
// 							>
// 								{product.data.quantity}
// 							</Typography>
// 						</div>
// 					) : null}
// 				</div>
// 				// )
// 			}
// 			innerScroll
// 		/>
// 	);
// }

{
	/* <FuseScrollbars className="flex-grow overflow-x-auto">
			<div className="w-full flex flex-col">
					<Table className="min-w-xl" aria-labelledby="tableTitle">
						<ProductTableHead rowCount={data.length} />

						<TableBody>
							<TableRow className="h-64">
								<TableCell className="w-52" component="th" scope="row" padding="none">
									{product.data != null ? (
										<img
											className="w-full block rounded"
											src={
												_.find(product.data.images, {
													id: product.data.featuredImageId
												}).url
											}
											alt={product.data.name}
										/>
									) : (
										<img
											className="w-full block rounded"
											src="assets/images/ecommerce/product-image-placeholder.png"
											alt="product"
										/>
									)}
								</TableCell>

								{product.data != null ? (
									<TableCell component="th" scope="row">
										{product.data.name}
									</TableCell>
								) : null}

								{product.data != null ? (
									<TableCell className="truncate" component="th" scope="row">
										{product.data.categories.join(', ')}
									</TableCell>
								) : null}

								{product.data != null ? (
									<TableCell component="th" scope="row" align="right">
										<span>$</span>
										{product.data.priceTaxIncl}
									</TableCell>
								) : null}

								{product.data != null ? (
									<TableCell component="th" scope="row" align="right">
										{product.data.quantity}
										<i
											className={clsx(
												'inline-block w-8 h-8 rounded mx-8',
												product.data.quantity <= 5 && 'bg-red',
												product.data.quantity > 5 && product.data.quantity <= 25 && 'bg-orange',
												product.data.quantity > 25 && 'bg-green'
											)}
										/>
									</TableCell>
								) : null}
							</TableRow>
						</TableBody>
					</Table>
				</div>
				<div>
					{product.data != null ? (
						<Typography
							className="mt-8 mb-16"
							// variant="h6"
							id="description"
							name="description"
							// onChange={handleChange}
							label="Description"
							type="text"
							// value=
							multiline
							// rows={5}
							// variant="outlined"
							fullWidth
							gutterBottom
						>
							{product.data.description}
						</Typography>
					) : null}
				</div>
			<div className="flex flex-col flex-1 md:ltr:pr-32 md:rtl:pl-32"> */
}

{
	/* <div className="p-24 flex flex-1 flex-col items-center justify-center md:flex-row md:items-end">
			<div className="flex flex-col items-start max-w-full"> 
			<div className="flex flex-1 flex-col items-center justify-center md:flex-row md:items-center md:justify-start">
			*/
}

<AppBar position="static" elevation={0}>
	<Toolbar className="px-8">
		<Typography variant="subtitle1" className="flex-1 px-12">
			General Information
		</Typography>
	</Toolbar>
</AppBar>;

export default withReducer('eCommerceApp', reducer)(Product);
