
import React from 'react';
import style from './modal.module.css'
import { FcGoogle } from "react-icons/fc";
import { GrFacebookOption } from "react-icons/gr";

function Login(props) {
    return (
        <article className={style.modal}>
        <div className={style.titles}>
       <h3 className={style.title}>Login</h3>|
       <h3 className={style.title}>Register</h3>
       </div>
       <form className={style.form}>
        <h4 className={style.subtitle}>Enter your username and password to login.</h4>
        <input  type='email' />
        <input  type='password' />
        <a href='#' className={style.link}>Forgot Password?</a>
        <button type='submit' className={style.buttonsubmit}>Login</button>
       </form>
       <div className={style.googlefacebook}>
<h4 className={style.subtitle}>Or login with</h4>
<button className={style.google}><FcGoogle />Login with Google</button>
<button className={style.facebook}><GrFacebookOption />Login with Facebook</button>

       </div>
       
      <button onClick={closeModal}>close</button>
    </article>
    );
}

export default Login;