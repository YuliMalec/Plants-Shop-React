
import './shop.css';

import { BsCartFill } from "react-icons/bs";
import { BsDashSquare } from "react-icons/bs";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import { BsPersonFill } from "react-icons/bs";

function MobileMenu (props){

    return(<div className="mobile-menu">
    <div className='mobile-menu-container'>
        <button  className='button-icon' onClick={()=>props.setIsShowSidebar(!props.isShowSidebar)}>
        <BsDashSquare size={26}/></button>
         </div>
         <div className='mobile-icons' >
        <BsCartFill className='icon' size={20}/>
         <BsHeartFill className='icon' size={20}/>
        <BsFillHouseDoorFill className='icon' size={20}/>
      
        <BsPersonFill className='icon' size={20}/></div>
    </div>)
}

export default MobileMenu;