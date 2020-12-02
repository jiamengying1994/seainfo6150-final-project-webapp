import React, {Component} from 'react';
import ProductsList from '../ProductsList/ProductsList';
import styles from './AllProducts.module.css';


const AllProducts = (props)  => {
  const products = props.products;


    console.log(products)
    return (
      <div>

      <div className={styles.productsDisplay}>
        <div className={styles.grid_style}>
          <ProductsList  products={products} />
        </div>

        </div>
       </div>

    )
}


  export default AllProducts;