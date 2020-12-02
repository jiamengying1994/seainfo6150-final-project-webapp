import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductDetail.module.css';

const ProductDetail = ({ product}) => {




    return (
      <div className={styles.ProductDetail}>

        <div className={styles.detailbox}>
          <div className={styles.detailImage}><img src={product.url} alt={product.category}/></div>
          <div className={styles.detailList}>
             <h1> {product.title} </h1>
            <ul>
              <li><span>{product.category}</span><p>Category</p></li>
              <li><span>{product.Dimensions}</span><p>Dimensions</p></li>
              <li><span>{product.Techniques}</span><p>Techniques</p></li>
            </ul>
            <div className={styles.description}>{product.text}</div>
            {/* start order button */}

          {/* end order button */}
          </div>

        </div>
      </div>
    );
  }



export default ProductDetail;