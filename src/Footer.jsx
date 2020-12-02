import React from 'react';
import style from './Footer.module.css'
const Footer = () => (
    <div>
        <div className={style.footer}>
            <div className={style.copyRight}>©2020, MENGYING JIA</div>
            <div className={style.contactList}>
            <ul>
                <li><a className={style.item} href='contact'>Contact</a></li>
                <li>Email:mygallery@gmail.com</li>
                <li>Phone:(206)457-6764</li>
                <li>401 Terry Street, Seattle, WA 98109</li>
            </ul>
            </div>
        </div>
    </div>
);

export default Footer;
