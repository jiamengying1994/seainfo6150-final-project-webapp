import { Link } from 'react-router-dom';
import styles from './ProductsList.module.css';
import React from 'react';


const ProductsList = ({ products}) => {
  console.log(products)
  return products.map(product => {
    const category = product.category
    return (
      <div key={product.id}>
        <div className={styles.singleProduct}>
          <div>
            <Link className={styles.AllProducts} to={`/products/${product.category}/${product.id}`}>
              <img className={styles.productsImage} src={product.url} alt={product.title}/>
            </Link>
          </div>
        </div>
      </div>
    );
  })
};



export default ProductsList;