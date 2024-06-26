import React from 'react';
import { useEffect } from 'react';
import '../shop/shop.css'
function PriceRange(props) {
    function useMinRangeInput(event){
        props.setMinValue(event.target.value)
      }
      function useMaxRangeInput(event){
       props.setMaxValue(event.target.value)
     }
     
     useEffect(()=>{
      
        document.querySelector('.range-track').style.left = (props.minValue/500) *100 + '%';
     document.querySelector('.range-track').style.right =100-(props.maxValue/500) *100 + '%' ;
     
       
     
     },[props.minValue,props.maxValue])
    return (
        <div className="price-range"><h3 className=" range title-sidebar">Price Range</h3>
        <div className="range-slider">
            <div className='range-track'></div>
           <input className='min-val' type='range'onChange={(event)=>useMinRangeInput(event)} value={props.minValue} min={9} max={500} />
           <input className='max-val' type='range'onChange={(event)=>useMaxRangeInput(event)} value={props.maxValue} min={9} max={500} />
           
        </div>
        <div className="price">Price:<div> $ {props.minValue} - $ {props.maxValue}</div></div>
        <button className="main-button main" onClick={()=>props.getFilter()}>Filter</button>
        </div>
    );
}

export default PriceRange;