import { BiLogIn } from "react-icons/bi";
import { SlBasket } from "react-icons/sl";
import  './Header.css';
import logo from "./../img/logo.png"
import search from "./../img/search.svg"
import { Link } from "react-router-dom";
/*import { Link, animateScroll as scroll } from "react-scroll";*/
import filter from "./../img/Filter.svg"
import find from './../img/find.svg'



function Header({handleInput,isHome,isSearch,isScreenMd,width}){

    return <header className="header">
      <div className="logo">
        <div className="img">
       <img  src={logo}/></div>
       <div className="title">GREENSHOP</div>
      </div>
      <div className="menu">
        <ul className="list">
           <li className="link">Home</li>
            <li className="link" >Shop</li>
            <li className="link">Plant Care</li>
            <li className="link">Blogs</li>
        </ul>
      </div>
      <div className="active">
        {(isHome || width <= 765 ) && <input className="searchInput"  placeholder='Find your plants' />}
        <div className="search" onClick={()=>handleInput()}>
        {(isSearch && width >= 768 ) && <img src={search}/>} 
        </div>
        <div className="basket" >
        <SlBasket size={20} />
        </div>
     {width <= 768 ? <button className="mobile-button"><img src={filter}/></button> : <button className="main-button"><BiLogIn  size={20} className="login"/>Login</button> }
     </div>
    </header>

}
export default Header;