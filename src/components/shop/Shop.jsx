
import './shop.css';

import Sidebar from '../sidebar/Sidebar';
import Pagination from './Pagination';
import plants from '../../data/plants.json'
import { useState,useContext,useMemo } from 'react';
import Context from '../../hooks/Context';
import MobileMenu from './MobileMenu';
import ProductsSection from './ProductsSection';
import {chooseTitle} from '../../hooks/useFilter';

  
function Shop(props){ 

  const value = useContext(Context)

    const limitPage =value.width <= 911 ? 8  : 9 ;
    const lastIndex = value.currentPage*limitPage;
    const [minValue,setMinValue] = useState(9);
    const [maxValue,setMaxValue] = useState(500);
   
    const [isSelected,setIsSelected] = useState(false);
      
    const firstIndex = lastIndex-limitPage;  
 
 let listProd2 =chooseTitle(value,minValue,maxValue)
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


