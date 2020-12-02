import React from 'react'
import Form from "../Form/Form";
import style from './Home.module.css';

const Home = () => {
    return (
       <div className={style.container}>
        <div>
            <img src="https://okl.scene7.com/is/image/OKL/Product_444725448172_Image_1?$kibo_pdp_large_main_image$&defaultImage=placeholder_product" alt="Gallery Wall" />
        </div>
        <div>
            <div className={style.title}><h1>If you are interested to purchase, please submit the following form</h1></div>
            <Form />
        </div>
    </div>
    )
}

export default Home
