
import './shop.css';

import Sidebar from '../sidebar/Sidebar';
import Pagination from './Pagination';
import plants from '../../data/plants.json'
import { useState,useContext,useMemo } from 'react';
import Context from '../../hooks/Context';
import MobileMenu from './MobileMenu';
import ProductsSection from './ProductsSection';
import {useFilter,sortList,chooseTitle} from '../../hooks/useFilter';

  
function Shop(props){ 

  const value = useContext(Context)

    const limitPage =value.width <= 911 ? 8  : 9 ;
    const lastIndex = value.currentPage*limitPage;
    const [minValue,setMinValue] = useState(9);
    const [maxValue,setMaxValue] = useState(500);
   
    const [isSelected,setIsSelected] = useState(false);
      
    const firstIndex = lastIndex-limitPage;  
    
const getFiltered =()=>useMemo(()=>{
  let arr = sortList(value);
  console.log(arr)
     if(value.isShowSize) arr = value.size; 
  return arr.filter(el=>Number(el.price.slice(1))>=minValue&&Number(el.price.slice(1))<=maxValue)  

     },[value.filter]) 
    
    let listProd = getFiltered(value)
 let listProd2 =chooseTitle(listProd,value)
let finalList = listProd2.slice(firstIndex,lastIndex)
 let totalPage =  listProd2.length  
    const paginate = pageNumber=>value.setCurrentPage(pageNumber)

    function chooseSize (param){
      value.setIsShowSize(true)
value.setFilter({...value.filter,title:titles[0]})
    value.setSize( plants.plants.filter(item=>{
       return item.size===param
      }))
      }

      function selectList(event){
       value.setFilter({...value.filter,sort:event.target.innerHTML})
        setIsSelected(!isSelected) 
   
       } 
       function selectOption(){
        setIsSelected(!isSelected) 
 
        } 
  
    return <>
    <section className="shop">

     {value.width > 431 && 
     <Sidebar 
     chooseSize={chooseSize} 
     value={value} 
      minValue={minValue}setMinValue={setMinValue}
      maxValue={maxValue}setMaxValue={setMaxValue}
      
      />}
      <ProductsSection
      selectList={selectList} selectOption={selectOption} 
       isSelected={isSelected} 
      value={value} finalList={finalList}
      />
     
  <Pagination value={value} 
  paginate={paginate} 
  limitPage={limitPage} 
  totalPage={totalPage}/>
{value.width < 431 && 
<MobileMenu 
 value={value}
chooseSize={chooseSize}  
minValue={minValue}
maxValue={maxValue}
/>}
    </section>
    </>
}
export default Shop;


