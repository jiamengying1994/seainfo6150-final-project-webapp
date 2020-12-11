import React, { useState } from "react";
import style from './Form.module.css';
/*import NumberFormat from 'react-number-format';*/
import Error from '../Error/Error'

const Form = () => {
  const [submittedForm, setSubmittedForm] = useState();
  function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    setSubmittedForm(data);
  };



  return (
    <div>
      {
        submittedForm ? (
          <div>Thanks for your interested, will reach out soon!</div>
        ) : (
          <form onSubmit={onSubmit}>
            <div className = {style.label}><label htmlFor="first">FirstName: </label>
            <input type="text" name="firstname" id="first" required="required"/></div>

            <div className = {style.label}><p><label htmlFor="last">LastName: </label>
            <input type="text" name="lastname" id="last" required="required"/></p></div>

            <div className = {style.label}><p><label htmlFor="phone">Phone: </label>
            <input type="text" name="phonenumber" id="phone" required="required" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
            <small>format: 123-456-7890</small></p></div>

            <div className = {style.label}><p><label htmlFor="email">Email: </label>
            <input type="text" name="email" id="email" required="required" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/></p></div>

            <div className = {style.label}><p><label htmlFor="paintinginfo">Please enter name of painting you are interested: </label>
            <input type="text" name="painting" id="paintinginfo" required="required"/></p></div>

            <div className = {style.label}><label htmlFor="myDropdownId">Category Interested:  </label>
            <select name="myDropdown" id="myDropdownId">
              <option value="">Choose</option>
              <option value="Abstract">Abstract</option>
              <option value="Impressionism">Impressionism</option>
              <option value="Classicism">Classicism</option>
              <option value="Symbolism">Symbolism</option>
              <option value="Conceptual Art">Conceptual Art</option>
              <option value="Pop Art">Pop Art</option>
            </select></div>

            <div className = {style.label}><p><label htmlFor="myDropdownId2">Prefer contacted by: </label>
            <select name="myDropdown2" id="myDropdownId2">
              <option value="">Choosewq</option>
              <option value="Phone">Phone</option>
              <option value="Email">Email</option>
            </select></p></div>

            <div className={style.label}>
                  <header>Your age group: </header>

                    <input type="radio" id="age1" name="age" value="0-21" />
                    <label htmlFor="age1">0-21</label>


                    <input type="radio" id="age2" name="age" value="22-41" />
                    <label htmlFor="age2">22-41</label>


                    <input type="radio" id="age3" name="age" value="42-61" />
                    <label htmlFor="age3">42-61</label>


                    <input type="radio" id="age4" name="age" value="61+" />
                    <label htmlFor="age4">61+</label>

                </div>
           <p>
            <input className =  {style.button} type="submit" value="Send it" />
            </p>
          </form>
        )
      }
    </div>
  )
}

export default Form
