
import './shop.css';


import { IoIosArrowDown } from "react-icons/io";

import Product from './Product';
import Sidebar from '../sidebar/Sidebar';
import Pagination from './Pagination';
import plants from '../../data/plants.json'
import { useEffect, useState, useMemo,useContext } from 'react';
import Context from '../../hooks/Context';

const titles = ['All Plants', 'New Arrives', 'Sale']
const sortMenu = ['Defolt sorting','Rising price','Descending prices']
    
function Shop(props){ 

  const value = useContext(Context)

    const limitPage = 9;
    const lastIndex = value.currentPage*limitPage;
    const [minValue,setMinValue] = useState(9);
    const [maxValue,setMaxValue] = useState(500);
    const [selected,setSelected] = useState('Defolt sorting');
    const [isSelected,setIsSelected] = useState(false);
    const [isFilter,setIsFilter] = useState(false);

    
    

    const firstIndex = lastIndex-limitPage;  
    const totalPage=value.isShowSize ? value.size.length : value.list.length;
  /* let listProd = props.list.slice(firstIndex,lastIndex)*/

   let sortedList=value.isShowSize ? sortList(value.size) :sortList(value.list)
let listProd = getFiltered(sortedList)
  console.log(value.isShowSize,sortedList)
let finalList = chooseTitle(listProd).slice(firstIndex,lastIndex)
    
    const paginate = pageNumber=>value.setCurrentPage(pageNumber)

    function chooseSize (param){
      value.setIsShowSize(true)

    value.setSize( plants.plants.filter(item=>{
       return item.size===param
      }))
      }


    function selectOption(){
       setIsSelected(!isSelected) 
      
        
       }

       function getFiltered(arr){
        if(isFilter){
        return arr.filter(el=>Number(el.price.slice(1))>=minValue&&Number(el.price.slice(1))<=maxValue)  
        } else{
          return arr
        }
        
       }

       function sortList(arr){ 
        
        let result;
        if(selected === 'Defolt sorting'){
             result= plants.plants.filter((el)=> el.categories === value.cat)
        }   
      
        if(selected === 'Rising price'){
       result =   arr.sort((a,b)=>Number(a.price.slice(1))-Number(b.price.slice(1)))
        }
        if(selected === 'Descending prices'){
       result = arr.sort((a,b)=>Number(b.price.slice(1))-Number(a.price.slice(1)))
       }
        
          return result
       }
     

      function selectList(event){
       setSelected(event.target.innerHTML)
        setIsSelected(!isSelected) 
        
    
       }  
     
   
      function chooseTitle(arr){ 
           
 let filteredList ;
        if(value.productTitle==='All Plants') filteredList = arr
        
       if(value.productTitle==='New Arrives'){
      filteredList= arr.filter(el=>el.arrives === true)
          }
         if(value.productTitle==='Sale'){
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
       
     document.querySelector('.range-track').style.left = (minValue/500) *100 + '%';
     document.querySelector('.range-track').style.right =100-(maxValue/500) *100 + '%' ;
     
     },[minValue,maxValue])


    return <>
    <section className="shop">

       <Sidebar chooseSize={chooseSize} value={value}  isFilter={isFilter} setIsFilter={setIsFilter}minValue={minValue}useMinRangeInput={useMinRangeInput}maxValue={maxValue}useMaxRangeInput={useMaxRangeInput}/>
        <article className="products-section">
<div className='products-top'>
            <div className='products-titles'>
              {titles.map((elem,ind)=>{
                return <h4 onClick={()=>{  value.setProductTitle(elem)}}
                className={value.productTitle===elem ?'product-title choosen':'product-title'} key={ind}>{elem}</h4>
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
              {value.isShowSize ? value.size.map((elem,index)=>{
                return <Product elem={elem} index={index} key={index}/>
              }):    
               finalList.map((elem,index)=>{
                return <Product elem={elem} index={index} key={index}/>
              })   
                 }
             </div>
        </article>
     
            <Pagination value={value} paginate={paginate} limitPage={limitPage} totalPage={totalPage}/>

    </section>
    </>
}
export default Shop;


