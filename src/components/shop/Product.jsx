

import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { GrFavorite } from "react-icons/gr";

function Product({elem}){
   
   
       
    return <><article className='product' >
    <div className='product'>
        <div className='img'>
           <div className='cover'>
            <div className='cover-img'onClick={(e)=>e.stopPropagation()}>
            <CiShoppingCart size={20} className='icon'onClick={(e)=>e.stopPropagation()}/>
            <GrFavorite size={20} className='icon'/><CiSearch size={20}className='icon'onClick={(e)=>e.stopPropagation()}/>
            </div>
            </div>
          
            <img src={elem.img}/>
           {elem.sale!==''? <div className='sale'>{elem.sale}</div>:''}</div>  
        <h4 className='product-name'>{elem.name}</h4>
        <div className='prices'>
        <div className='product-price'>{elem.price}</div>
        {elem.oldPrice!==''? <div className='old-price'>{elem.oldPrice}</div>:''}
        </div>
       
    </div></article> </>
}
export default Product;