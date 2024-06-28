
import './shop.css';

import { BsCartFill } from "react-icons/bs";
import { BsDashSquare } from "react-icons/bs";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import { BsPersonFill } from "react-icons/bs";
import Sidebar from '../sidebar/Sidebar';
import PriceRange from '../sidebar/PriceRange';

function MobileMenu (props){

    return(<div className={props.value.isShowSidebar?"mobile-menu":"mobile-menu hide"}>
    <div className='mobile-menu-container'>
        <button  className='button-icon' onClick={()=>props.value.setIsShowSidebar(!props.isShowSidebar)}>
        <BsDashSquare size={26}/></button>
         </div>
         <div className='mobile-icons' >
        <BsCartFill className='icon' size={20}/>
         <BsHeartFill className='icon' size={20}/>
        <BsFillHouseDoorFill className='icon' size={20}/>
      
        <BsPersonFill className='icon' size={20}/></div>
        <div className='menu-container'>
      <Sidebar cat={props.value.cat} value={props.value} 
      chooseSize={props.chooseSize}  
     minValue={props.minValue}
    
      maxValue={props.maxValue}
      />

        </div>
    </div>)
}

export default MobileMenu;