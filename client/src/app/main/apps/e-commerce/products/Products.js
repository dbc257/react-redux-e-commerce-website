import FusePageSimple from '@fuse/core/FusePageSimple';
import withReducer from 'app/store/withReducer';
import React from 'react';
import reducer from '../store/reducers';
import ProductsHeader from './ProductsHeader';
import ProductsTable from './ProductsTable';

function Products() {
	return (
		<FusePageSimple
			classes={{
				content: 'flex',
				header: 'min-h-72 h-72 sm:h-136 sm:min-h-136'
			}}
			header={<ProductsHeader />}
			content={<ProductsTable />}
			innerScroll
		/>
	);
}

export default withReducer('eCommerceApp', reducer)(Products);
