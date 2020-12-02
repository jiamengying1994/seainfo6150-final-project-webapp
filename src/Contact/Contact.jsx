import React from 'react';
import style from './Contact.module.css';


const Contact = () => (
  <div className={style.contact_background}>

       <div className={style.contact_text}>
              <div className={style.title}><h1>Contact</h1></div>
              <p>Feel free to contact us.</p >
              <table>
                <tbody>
                  <tr>
                    <td>< img src="./assets/img/contact/email.svg" alt='Email' /></td>
                    <td>Email</td>
                    <td>mygallery@gmail.com</td>
                  </tr>
                  <tr>
                    <td>< img src="./assets/img/contact/phone.svg" alt='Phone' /></td>
                    <td>Phone</td>
                    <td>(206)457-6764</td>
                  </tr>
                  <tr>
                    <td>< img src="./assets/img/contact/address.svg" alt='Address' /></td>
                    <td>Address</td>
                    <td>401 Terry Street, Seattle, WA98109</td>
                  </tr>
                </tbody>
              </table>
            </div>

  </div>
)

export default Contact;
