import { useMemo } from "react";
import plants from './../data/plants.json';


const sortList =(value)=>{ 
      
      if(value.isShowSize) value.list = value.size; 
 
        let result;
        if(value.filter.sort === 'Defolt sorting'){
             result= plants.plants.filter((el)=> el.categories === value.cat)
        }   
      
        if(value.filter.sort === 'Rising price'){
       result =   value.list.sort((a,b)=>Number(a.price.slice(1))-Number(b.price.slice(1)))
        }
        if(value.filter.sort === 'Descending prices'){
       result = value.list.sort((a,b)=>Number(b.price.slice(1))-Number(a.price.slice(1)))
       }
    
       return result;
         
       }
    
   export const chooseTitle=(value,minValue,maxValue)=>{ 
    let arr =getFiltered(value,minValue,maxValue);  
       if(value.isShowSize) arr = value.size; 
        
 let filteredList ;
        if(value.filter.title==='All Plants') filteredList = arr
        
       if(value.filter.title==='New Arrives'){
      filteredList= arr.filter(el=>el.arrives === true)
          }
         if(value.filter.title==='Sale'){
         filteredList= arr.filter(item=>{
         
         return item.sale!=='' 
        } )      
   }
   
       return filteredList;
      }
   

      export const getFiltered =(value,minValue,maxValue)=>useMemo(()=>{
        let arr = sortList(value);
        console.log(arr)
           if(value.isShowSize) arr = value.size; 
        return arr.filter(el=>Number(el.price.slice(1))>=minValue&&Number(el.price.slice(1))<=maxValue)  
      
           },[value.filter]) 
      

       export const getQueryPlant =(value)=>useMemo(()=>{
          setTimeout(()=>{
            
              return plants.plants.find((item)=>{
                item.title.toLoverCase().includes(value)
              })
          },[1000])
       })    