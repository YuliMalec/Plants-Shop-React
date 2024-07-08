import React from 'react';
import Product from './Product';
import './shop.css';
import { useContext } from 'react';
import Context from '../../hooks/Context';
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';
const sortMenu = ['Defolt sorting','Rising price','Descending prices']
const titles = ['All Plants', 'New Arrives', 'Sale']
function ProductsSection(props) {

  const value = useContext(Context);

    return (
        <article className="products-section">
        <div className='products-top'>
                    <div className='products-titles'>
                      {titles.map((elem,ind)=>{
                        return <h4 onClick={()=>{value.setFilter({...value.filter,title:elem})}}
                        className={value.filter.title===elem ?'product-title choosen':'product-title'} key={ind}>{elem}</h4>
                      })}
                       
                    </div>
                    <div className='sort'>
                       <div className='sort-title'>Sorted by:</div>
                    <ul className='title-select' >{value.filter.sort}
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
                        return <Link to={{
                          pathname:`/shop/${elem.id}`,
                          propsSearch:props.value
                         }}  key={elem.id}
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