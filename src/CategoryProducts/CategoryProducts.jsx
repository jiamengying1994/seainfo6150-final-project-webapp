import React from 'react';
import PropTypes from 'prop-types';

import ProductsList from '../ProductsList/ProductsList';

const CategoryProducts = ({ category, products }) => (
  <ProductsList products={products} />
);



export default CategoryProducts;