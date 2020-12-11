import React from 'react';
import ProductsList from '../ProductsList/ProductsList';
import styles from './AllProducts.module.css';


const AllProducts = (props)  => {
  const products = props.products;
    return (
      <div>
        <div className={styles.Display}>
         <div className={styles.grid}>
          <ProductsList  products={products} />
        </div>
        </div>
      </div>
    )
}

export default AllProducts;