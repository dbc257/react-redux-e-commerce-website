import FuseScrollbars from '@fuse/core/FuseScrollbars';
import _ from '@lodash';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as Actions from '../store/actions';
import ProductsTableHead from './ProductsTableHead';

function ProductsTable(props) {
	const dispatch = useDispatch();
	const products = useSelector(({ eCommerceApp }) => eCommerceApp.products.data);
	const searchText = useSelector(({ eCommerceApp }) => eCommerceApp.products.searchText);
	const [data, setData] = useState(products);
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);
	const [order, setOrder] = useState({
		direction: 'asc',
		id: null
	});
	useEffect(() => {
		dispatch(Actions.getProducts());
	}, [dispatch]);
	useEffect(() => {
		if (searchText.length !== 0) {
			setData(_.filter(products, item => item.name.toLowerCase().includes(searchText.toLowerCase())));
			setPage(0);
		} else {
			setData(products);
		}
	}, [products, searchText]);
	function handleRequestSort(event, property) {
		const id = property;
		let direction = 'desc';

		if (order.id === property && order.direction === 'desc') {
			direction = 'asc';
		}

		setOrder({
			direction,
			id
		});
	}
	function handleClick(item) {
		props.history.push(`/apps/e-commerce/products/${item.id}/${item.handle}`);
	}
	function handleChangePage(event, value) {
		setPage(value);
	}
	function handleChangeRowsPerPage(event) {
		setRowsPerPage(event.target.value);
	}
	return (
		<div className="w-full flex flex-col">
			<FuseScrollbars className="flex-grow overflow-x-auto">
				<Table className="min-w-xl" aria-labelledby="tableTitle">
					<ProductsTableHead order={order} onRequestSort={handleRequestSort} rowCount={data.length} />
					<TableBody>
						{_.orderBy(
							data,
							[
								o => {
									switch (order.id) {
										case 'categories': {
											return o.categories[0];
										}
										default: {
											return o[order.id];
										}
									}
								}
							],
							[order.direction]
						)
							.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							.map(n => {
								return (
									<TableRow
										className="h-64 cursor-pointer"
										hover
										key={n.id}
										onClick={event => handleClick(n)}
									>
										<TableCell className="w-52" component="th" scope="row" padding="none">
											{n.images.length > 0 && n.featuredImageId ? (
												<img
													className="w-full block rounded"
													src={_.find(n.images, { id: n.featuredImageId }).url}
													alt={n.name}
												/>
											) : (
												<img
													className="w-full block rounded"
													src="assets/images/ecommerce/product-image-placeholder.png"
													alt={n.name}
												/>
											)}
										</TableCell>
										<TableCell component="th" scope="row">
											{n.name}
										</TableCell>
										<TableCell className="truncate" component="th" scope="row">
											{n.categories.join(', ')}
										</TableCell>
										<TableCell component="th" scope="row" align="right">
											<span>$</span>
											{n.priceTaxIncl}
										</TableCell>
										<TableCell component="th" scope="row" align="right">
											{n.quantity}
											<i
												className={clsx(
													'inline-block w-8 h-8 rounded mx-8',
													n.quantity <= 5 && 'bg-red',
													n.quantity > 5 && n.quantity <= 25 && 'bg-orange',
													n.quantity > 25 && 'bg-green'
												)}
											/>
										</TableCell>
									</TableRow>
								);
							})}
					</TableBody>
				</Table>
			</FuseScrollbars>
			<TablePagination
				className="overflow-hidden"
				component="div"
				count={data.length}
				rowsPerPage={rowsPerPage}
				page={page}
				backIconButtonProps={{
					'aria-label': 'Previous Page'
				}}
				nextIconButtonProps={{
					'aria-label': 'Next Page'
				}}
				onChangePage={handleChangePage}
				onChangeRowsPerPage={handleChangeRowsPerPage}
			/>
		</div>
	);
}

export default withRouter(ProductsTable);
