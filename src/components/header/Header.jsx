import { BiLogIn } from "react-icons/bi";
import { SlBasket } from "react-icons/sl";
import  './Header.css';
import logo from "./../img/logo.png"
import search from "./../img/search.svg"
import { Link } from "react-router-dom";
/*import { Link, animateScroll as scroll } from "react-scroll";*/
import filter from "./../img/Filter.svg"
import find from './../img/find.svg'
import Context from "../../hooks/Context";
import { useContext,useState } from "react";
import { useResize } from '../../hooks/use-resize';


function Header(props){
  const [value,setValue] = useState('')
  const [isHome,setIsHome] = useState(false)
  const [isSearch,setIsSearch] = useState(true)
  const { width, isScreenSm, isScreenMd, isScreenLg, isScreenXl } = useResize();
  function handleInput(){
    setIsHome(!isHome)
    setIsSearch(!isSearch)
   }

    return <header className="header">
      <Link className="logo" to={'/'}>
        <div className="img">
       <img  src={logo}/></div>
       <div className="title">GREENSHOP</div>
      </Link>
      <div className="menu">
        <ul className="list">
           <li className="link">Home</li>
            <li className="link" >Shop</li>
            <li className="link">Plant Care</li>
            <li className="link">Blogs</li>
        </ul>
      </div>
      <div className="active">
        {(isHome || width <= 765 ) && <input className="searchInput"  
        placeholder='Find your plants' 
        value={value}
        onChange={(e)=>setValue(e.target.value)}
        />}
        <div className="search" onClick={()=>handleInput()}>
        {(isSearch && width >= 768 ) && <img src={search}/>} 
        </div>
        <div className="basket" >
          <Link to={'/card'}>
        <SlBasket size={20} /></Link>
        </div>
     {width <= 768 ? <button className="mobile-button" onClick={props.openModal}><img src={filter}/></button> : <button className="main-button"onClick={props.openModal}><BiLogIn  size={20} className="login"/>Login</button> }
     </div>
    </header>

}
export default Header;