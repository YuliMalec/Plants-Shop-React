import { useState,useMemo } from "react";
import plants from './../data/plants.json'

    
export   const sortList =(value,selected)=>{ 
      
      if(value.isShowSize) value.list = value.size; 
 
        let result;
        if(selected === 'Defolt sorting'){
             result= plants.plants.filter((el)=> el.categories === value.cat)
        }   
      
        if(selected === 'Rising price'){
       result =   value.list.sort((a,b)=>Number(a.price.slice(1))-Number(b.price.slice(1)))
        }
        if(selected === 'Descending prices'){
       result = value.list.sort((a,b)=>Number(b.price.slice(1))-Number(a.price.slice(1)))
       }
        
       return result;
         
       }
       
      
    export  const chooseTitle=(arr,value)=>{ 
        console.log(arr)
       if(value.isShowSize) arr = value.size; 
        
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
   export const getFiltered = (arr,value,isFilter)=>{
        if(value.isShowSize) arr = value.size; 
        if(isFilter){
        return arr.filter(el=>Number(el.price.slice(1))>=minValue&&Number(el.price.slice(1))<=maxValue)  
        } else{
          return arr
        }
        
       }

  export const useFilter=() =>{

  }  