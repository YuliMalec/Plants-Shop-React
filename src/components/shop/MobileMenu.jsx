
import './shop.css';

import { Link } from 'react-router-dom';
import { BsCartFill } from "react-icons/bs";
import { BsDashSquare } from "react-icons/bs";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import { BsPersonFill } from "react-icons/bs";
import Sidebar from '../sidebar/Sidebar';
import PriceRange from '../sidebar/PriceRange';
import Context from '../../hooks/Context';
import { useContext } from 'react';

function MobileMenu (){
const value = useContext(Context)
    return(<div className={value.isShowSidebar?"mobile-menu":"mobile-menu hide"}>
    <div className='mobile-menu-container'>
        <button  className='button-icon' onClick={()=>value.setIsShowSidebar(!value.isShowSidebar)}>
        <BsDashSquare size={26}/></button>
         </div>
         <div className='mobile-icons' >
          <Link className='mobile-icon-link'to={"/card"}>{value.card.length >=1 &&
        <span className="count-span">{value.card.length}</span>}
        <BsCartFill className='icon' size={20}/></Link>
        <Link><BsHeartFill className='icon' size={20}/></Link> 
       <Link to={"/"}> <BsFillHouseDoorFill className='icon' size={20}/></Link>
        <Link><BsPersonFill className='icon' size={20}/></Link>
        </div>
        <div className='menu-container'>
  <Sidebar />

        </div>
    </div>)
}

export default MobileMenu;