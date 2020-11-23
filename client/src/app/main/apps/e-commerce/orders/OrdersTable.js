import FuseScrollbars from '@fuse/core/FuseScrollbars';
import FuseUtils from '@fuse/utils';
import _ from '@lodash';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import OrdersStatus from '../order/OrdersStatus';
import * as Actions from '../store/actions';
import OrdersTableHead from './OrdersTableHead';

function OrdersTable(props) {
	const dispatch = useDispatch();
	const orders = useSelector(({ eCommerceApp }) => eCommerceApp.orders.data);
	const searchText = useSelector(({ eCommerceApp }) => eCommerceApp.orders.searchText);
	const [data, setData] = useState(orders);
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);
	const [order, setOrder] = useState({
		direction: 'asc',
		id: null
	});

	useEffect(() => {
		dispatch(Actions.getOrders());
	}, [dispatch]);

	useEffect(() => {
		if (searchText.length !== 0) {
			setData(FuseUtils.filterArrayByString(orders, searchText));
			setPage(0);
		} else {
			setData(orders);
		}
	}, [orders, searchText]);

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
		props.history.push(`/apps/e-commerce/orders/${item.id}`);
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
					<OrdersTableHead
						order={order}
						onRequestSort={handleRequestSort}
						rowCount={data.length}
					/>

					<TableBody>
						{_.orderBy(
							data,
							[
								o => {
									switch (order.id) {
										case 'id': {
											return parseInt(o.id, 10);
										}
										case 'customer': {
											return o.customer.firstName;
										}
										case 'payment': {
											return o.payment.method;
										}
										case 'status': {
											return o.status[0].name;
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
										role="checkbox"
										tabIndex={-1}
										key={n.id}
										onClick={event => handleClick(n)}
									>
										<TableCell component="th" scope="row">
											{n.id}
										</TableCell>

										<TableCell component="th" scope="row">
											{n.reference}
										</TableCell>

										<TableCell className="truncate" component="th" scope="row">
											{`${n.customer.firstName} ${n.customer.lastName}`}
										</TableCell>

										<TableCell component="th" scope="row" align="right">
											<span>$</span>
											{n.total}
										</TableCell>

										<TableCell component="th" scope="row">
											{n.payment.method}
										</TableCell>

										<TableCell component="th" scope="row">
											<OrdersStatus name={n.status[0].name} />
										</TableCell>

										<TableCell component="th" scope="row">
											{n.date}
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

export default withRouter(OrdersTable);
