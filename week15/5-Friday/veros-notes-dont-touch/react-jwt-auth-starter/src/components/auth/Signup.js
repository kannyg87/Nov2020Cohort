import React, {useState} from "react";
import { Link } from 'react-router-dom'
import { reduxForm, Field } from 'redux-form'

const Signup = () => {

const

  const handleSubmit = (e)=>{
    e.preventDefault();
  }

  return (
  <div className="mt-5">
  
    <div className="grid align__item">

      <div className="register">

            <img height="100px" src="https://avatars.githubusercontent.com/u/67744643?s=200&v=4" alt=""/>

            <h2>Sign Up</h2>

            <form onSubmit={handleSubmit} className="form">

              <div className="form__field">
                <input type="email" placeholder="enter email address" />
                <Field 
                name="email"
                type="text"
                component="input"
                autoComplete ="none"
                />
              </div>

              <div className="form__field">
                <input type="password" placeholder="enter password" />
              </div>

              <div className="form__field">
                <input type="submit" value="Sign Up" />
              </div>

          </form>

          <p>Already have an account? <Link to="/signin">Log in</Link></p>

      </div>

    </div>
  
  </div>);
};

export default reduxForm()(Signup) ;
