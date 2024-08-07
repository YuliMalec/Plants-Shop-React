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
import { Navigate } from "react-router-dom";


function Header(props){
  
  const [isHome,setIsHome] = useState(false)
  const [isSearch,setIsSearch] = useState(true)
const value = useContext(Context)
  const { width, isScreenSm, isScreenMd, isScreenLg, isScreenXl } = useResize();
  function handleInput(){
    setIsHome(!isHome)
    setIsSearch(!isSearch)
   
   }
   const getQueryItem = (e)=>{
    props.setQueryString(e.target.value)
     value.setDone(true)
   }
    return <header className="header">
       {value.done && <Navigate to="/" replace={true}/>}
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
        querystring={props.querystring}
        onChange={(e)=>getQueryItem(e)}
        />}
        <div className="search" onClick={()=>handleInput()}>
        {(isSearch && width >= 768 ) && <img src={search}/>} 
        </div>
        <div className="basket" >
          <Link to={'/card'}>
        <SlBasket size={20} />{value.card.length >=1 &&
        <span className="count-span">{value.card.length}</span>}
        </Link>
        </div>
     {width <= 768 ? <button className="mobile-button" onClick={props.openModal}><img src={filter}/></button> : <button className="main-button"onClick={props.openModal}><BiLogIn  size={20} className="login"/>Login</button> }
     </div>
    </header>

}
export default Header;