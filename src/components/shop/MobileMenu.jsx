
import './shop.css';

import { BsCartFill } from "react-icons/bs";
import { BsDashSquare } from "react-icons/bs";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import { BsPersonFill } from "react-icons/bs";
import Sidebar from '../sidebar/Sidebar';

function MobileMenu (props){

    return(<div className={props.isShowSidebar?"mobile-menu":"mobile-menu hide"}>
    <div className='mobile-menu-container'>
        <button  className='button-icon' onClick={()=>props.setIsShowSidebar(!props.isShowSidebar)}>
        <BsDashSquare size={26}/></button>
         </div>
         <div className='mobile-icons' >
        <BsCartFill className='icon' size={20}/>
         <BsHeartFill className='icon' size={20}/>
        <BsFillHouseDoorFill className='icon' size={20}/>
      
        <BsPersonFill className='icon' size={20}/></div>
        <div className='menu-container'>
      <Sidebar cat={props.cat} value={props.value} 
      chooseSize={props.chooseSize}  isFilter={props.isFilter} 
      setIsFilter={props.setIsFilter}minValue={props.minValue}
      useMinRangeInput={props.useMinRangeInput}
      maxValue={props.maxValue}useMaxRangeInput={props.useMaxRangeInput}
      />

        </div>
    </div>)
}

export default MobileMenu;