
import './shop.css';

import Sidebar from '../sidebar/Sidebar';
import Pagination from './Pagination';
import plants from '../../data/plants.json'
import { useState,useContext } from 'react';
import Context from '../../hooks/Context';
import MobileMenu from './MobileMenu';
import ProductsSection from './ProductsSection';
import {useFilter,sortList,chooseTitle,getFiltered} from '../../hooks/useFilter';

  
function Shop(props){ 

  const value = useContext(Context)

    const limitPage =value.width <= 911 ? 8  : 9 ;
    const lastIndex = value.currentPage*limitPage;
    const [minValue,setMinValue] = useState(9);
    const [maxValue,setMaxValue] = useState(500);
    const [selected,setSelected] = useState('Defolt sorting');
    const [isSelected,setIsSelected] = useState(false);
    const [isFilter,setIsFilter] = useState(false);
    
    const firstIndex = lastIndex-limitPage;  
   
    
    let sortedList=sortList(value,selected)
  

  const [filter,setFilter] = useState({sort:'',query:''})  

let listProd = getFiltered(sortedList,value)
 let listProd2 =chooseTitle(listProd,value)
let finalList = listProd2.slice(firstIndex,lastIndex)
 let totalPage =  listProd2.length  
    const paginate = pageNumber=>value.setCurrentPage(pageNumber)

    function chooseSize (param){
      value.setIsShowSize(true)
value.setProductTitle(titles[0])
    value.setSize( plants.plants.filter(item=>{
       return item.size===param
      }))
      }
     


    


      function selectList(event){
       setSelected(event.target.innerHTML)
        setIsSelected(!isSelected) 
        
    
       } 
       function selectOption(){
        setIsSelected(!isSelected) 
 
        } 
     
  

    return <>
    <section className="shop">

     {value.width > 431 && <Sidebar chooseSize={chooseSize} 
     value={value}  isFilter={isFilter}
      setIsFilter={setIsFilter}
      minValue={minValue}setMinValue={setMinValue}
      maxValue={maxValue}setMaxValue={setMaxValue}
      
      />}
      <ProductsSection  setTitle={value.setProductTitle} title={value.productTitle}
      selectList={selectList} selectOption={selectOption} setProd={value.setProd}
      selected={selected } isSelected={isSelected} value={value} finalList={finalList}
      />
     
            <Pagination value={value} paginate={paginate} limitPage={limitPage} totalPage={totalPage}/>
{value.width < 431 && <MobileMenu 
setIsShowSidebar={value.setIsShowSidebar}
isShowSidebar={value.isShowSidebar}
cat={value.cat} value={value}
chooseSize={chooseSize}  isFilter={isFilter} 
setIsFilter={setIsFilter}minValue={minValue}
useMinRangeInput={useMinRangeInput}
maxValue={maxValue}useMaxRangeInput={useMaxRangeInput}
/>}
    </section>
    </>
}
export default Shop;


