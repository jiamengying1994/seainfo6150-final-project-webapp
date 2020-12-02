import React from 'react';
import { Link } from 'react-router-dom';
import style from './Category.module.css';

const Category = ({ categories }) => {
  return (<div><ul className={style.categories}>
    {
       categories.map(category => {
          return (<li key={category.id}>
            <Link to={`/products/${category.category}`} className={style.link}>
              <div className={style.category}>
                <span>{category.category}</span>
              </div>
            </Link>
          </li>);
      })
    }</ul></div>)
};


export default Category;