import React from 'react';
import Product from './Product';
import './shop.css';

import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';
const sortMenu = ['Defolt sorting','Rising price','Descending prices']
const titles = ['All Plants', 'New Arrives', 'Sale']
function ProductsSection(props) {


    return (
        <article className="products-section">
        <div className='products-top'>
                    <div className='products-titles'>
                      {titles.map((elem,ind)=>{
                        return <h4 onClick={()=>{  props.setTitle(elem)}}
                        className={props.productTitle===elem ?'product-title choosen':'product-title'} key={ind}>{elem}</h4>
                      })}
                       
                    </div>
                    <div className='sort'>
                       <div className='sort-title'>Sorted by:</div>
                    <ul className='title-select' >{props.selected}
                   {props.isSelected && sortMenu.map((el,index)=>{
                    return <li className='option' key={index} onClick={(event)=>props.selectList(event)}>{el}</li>
                   })} 
                     
                    </ul>
                     <div className='sort-icon' onClick={props.selectOption}><IoIosArrowDown size={16}/></div>
                    </div>
                    </div>
                     <div className='products'>
                      {
                       props.finalList.map((elem,index)=>{
                        return <Link to={`/shop/${elem.id}` }key={elem.id} onClick={(e)=>props.setProd(e,elem)}
                        ><Product elem={elem}key={elem.id} 
                        index={index} 
                        value={props.value}
                        /></Link>
                         
                      })   
                         }
                     </div>
                </article>
    );
}

export default ProductsSection;