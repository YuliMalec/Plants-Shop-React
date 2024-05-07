
import './shop.css';


import { IoIosArrowDown } from "react-icons/io";

import Product from './Product';
import Sidebar from '../sidebar/Sidebar';
import Pagination from './Pagination';

import { useEffect, useState, useMemo } from 'react';


const titles = ['All Plants', 'New Arrives', 'Sale']
const sortMenu = ['Defolt sorting','Rising price','Descending prices']
    
function Shop(props){ 
   
    
    const limitPage = 9;
    const lastIndex = props.currentPage*limitPage;
    const [minValue,setMinValue] = useState(39)
    const [maxValue,setMaxValue] = useState(10000)
    const [selected,setSelected] = useState('Defolt sorting');
    const [isSelected,setIsSelected] = useState(false)
    const firstIndex = lastIndex-limitPage;  
    const totalPage= props.list.length;
  /* let listProd = props.list.slice(firstIndex,lastIndex)*/
   
let listProd = chooseTitle(props.list)
  
let finalList = sortList(listProd).slice(firstIndex,lastIndex)
    
    const paginate = pageNumber=>props.setCurrentPage(pageNumber)
    function selectOption(){
       setIsSelected(!isSelected) 
      
        
       }

       function sortList(arr){
       
            let result = arr;
      
        if(selected === 'Rising price'){
          props.setList(props.list.sort((a,b)=>Number(a.price.slice(1))-Number(b.price.slice(1))))
        }
        if(selected === 'Descending prices'){
        props.setList(props.list.sort((a,b)=>Number(b.price.slice(1))-Number(a.price.slice(1))))
       }
          console.log(result)
          return result || props.list
       }
     

      function selectList(event){
       setSelected(event.target.innerHTML)
        setIsSelected(!isSelected) 
        console.log(selected)
    
       }  
     
   
      function chooseTitle(arr){ 
            
 let filteredList ;
        if(props.productTitle==='All Plants') filteredList = arr
        
       if(props.productTitle==='New Arrives'){
      filteredList= arr.filter(el=>el.arrives === true)
          }
         if(props.productTitle==='Sale'){
         filteredList= arr.filter(item=>{
         
         return item.sale!=='' 
        } )      
   }
       return filteredList;
      }

   
      function useMinRangeInput(event){
        setMinValue(event.target.value)
      }
      function useMaxRangeInput(event){
       setMaxValue(event.target.value)
     }
     
     useEffect(()=>{
       
     document.querySelector('.range-track').style.left = (minValue/10000) *100 + '%';
     document.querySelector('.range-track').style.right =100-(maxValue/10000) *100 + '%' ;
     
     },[minValue,maxValue])


    return <>
    <section className="shop">
       <Sidebar chooseProduct={props.chooseProduct}cat={props.cat}minValue={minValue}useMinRangeInput={useMinRangeInput}maxValue={maxValue}useMaxRangeInput={useMaxRangeInput}/>
        <article className="products-section">
<div className='products-top'>
            <div className='products-titles'>
              {titles.map((elem,ind)=>{
                return <h4 onClick={()=>{  props.setProductTitle(elem)}}
                className={props.productTitle===elem ?'product-title choosen':'product-title'} key={ind}>{elem}</h4>
              })}
               
            </div>
            <div className='sort'>
               <div className='sort-title'>Sorted by:</div>
            <ul className='title-select' >{selected}
           {isSelected && sortMenu.map((el,index)=>{
            return <li className='option' key={index} onClick={(event)=>selectList(event)}>{el}</li>
           })} 
             
            </ul>
             <div className='sort-icon' onClick={selectOption}><IoIosArrowDown size={16}/></div>
            </div>
            </div>
             <div className='products'>
              { finalList.map((elem,index)=>{
                return <Product elem={elem} index={index} key={index}/>
              })   
                 }
             </div>
        </article>
     
            <Pagination currentPage={props.currentPage} paginate={paginate} limitPage={limitPage} totalPage={totalPage}/>

    </section>
    </>
}
export default Shop;


