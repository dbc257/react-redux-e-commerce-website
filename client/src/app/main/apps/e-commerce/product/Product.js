import FusePageSimple from '@fuse/core/FusePageSimple';
// import FusePageCarded from '@fuse/core/FusePageCarded';
import withReducer from 'app/store/withReducer';
import React from 'react';
import reducer from '../store/reducers';
import ProductHeader from './ProductHeader';
import ProductTable from './ProductTable';

function Product() {
	return (
		<FusePageSimple
			classes={{
				content: 'flex',
				header: 'min-h-72 h-72 sm:h-136 sm:min-h-136'
			}}
			header={<ProductHeader />}
			content={<ProductTable />}
			innerScroll
		/>
	);
}

export default withReducer('eCommerceApp', reducer)(Product);
