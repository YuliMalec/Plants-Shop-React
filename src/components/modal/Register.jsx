import React from 'react';
import { IoMdClose } from "react-icons/io";
import style from './modal.module.css'
import { FcGoogle } from "react-icons/fc";
import { GrFacebookOption } from "react-icons/gr";

function Register(props) {

    function handleModal(){
        props.setIsRegister(!props.isRegister)
        props.setIsLogin(!props.isLogin)
      }
    console.log(props.isRegister)
    return (
        <article className={style.modal}>
            <button onClick={props.closeModal}><IoMdClose size={18} fill='rgba(70, 163, 88, 1)'/></button>
        <div className={style.titles}>
       <button className={style.title} onClick={handleModal}>Login</button><span>|</span>
       <button className={style.titleactive} onClick={handleModal}>Register</button>
       </div>
       <form className={style.form}>
        <h4 className={style.subtitle}>Enter your username and password to register.</h4>
        <input  type='text' placeholder='Username' />
        <input  type='email' placeholder='Enter your email address'/>
        <input  type='password' placeholder='Password'/>
        <input  type='password' placeholder='Confirm password'/>
        
        <button type='submit' className={style.buttonsubmit}>Register</button>
       </form>
       <div className={style.googlefacebook}>
<h4 className={style.subtitle}>Or login with</h4>
<button className={style.google}><FcGoogle />Login with Google</button>
<button className={style.facebook}><GrFacebookOption />Login with Facebook</button>

       </div>
       
      
    </article>
    );
}

export default Register;