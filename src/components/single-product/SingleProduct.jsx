import { Link,useParams } from "react-router-dom";



import plants from '../../data/plants.json'

import './single-product.css'
import search from './../img/search.svg'
import { useState,useContext} from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdCameraAlt } from "react-icons/md";

import Text from "./Text";
import CounterButtons from "./counter-buttons/CounterButtons";
import Releted from "../releted/Releted";
import Rating from "./rating/Rating";
import Context from "../../hooks/Context";
import { useEffect } from "react";

const sizeButtons=['S','M','L','XL']
const descriptionTitles = ['Product Description','Reviews (19)']
function SingleProduct(){
  const value = useContext(Context)

    let params = useParams()
    const item = plants.plants.find((el)=>el.id===params.id)
    const [showImg,setShowImg] = useState(item.subImg[0])
  
    const [chooseSize,setChooseSize] = useState(sizeButtons[0])
    const [isActiveTitle,setIsActiveTitile] = useState(descriptionTitles[0])
   

    function addToCard(){
   const quantity = value.count
    const found =   value.card.find((el)=>el[2]===item.id) || false;
    
if(!found){
   value.setCard([...value.card,[item.name,item.price,item.id,item.img,quantity]])
    } 
    
       
   
    }
 
    return <>
      
  
    <h3 className="product-view-path">Home / Shop</h3>
    <section className="product-view">
      <div className="product--image">
        <div className="vertical-imges">
          {item.subImg.map((elem,ind)=>{
             return <div key={ind} className={showImg===elem?"vertical-img active":'vertical-img'} onClick={()=>setShowImg(elem)}>
             <img src={elem} />
             </div>
          })}
           
        </div>
        <div className="big-image">
          <div className="big-image-icon" >
            <img  src={search} />
          </div>
          <div className="big-image-img">
        <img src={showImg}/></div>
        </div>
      </div>
      <div className="product-view-details">
        <h4 className="product-view-title">{item.name}</h4>
      <div className="price-rating">
        <div className="price-rating-price">{item.price}</div>
        <Rating/>
      </div>
      <div className="short-dect">
         <h5 className="subtitle">Short Description:</h5>
         <div className="short-dect-text">
            <p>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. </p>
         </div>
      </div> 
      <h5 className="subtitle">Size:</h5>
      <div className="product-size">
     
      <div className="size-choose">
       { sizeButtons.map((el,ind)=>{
        return <button className={chooseSize===el ? "size-choose-button-active" : "size-choose-button"}key={ind} onClick={()=> setChooseSize(el)}>{el}</button>
       })}
     </div>
       <div className="buy-now-buttons">
       <CounterButtons count={value.count} setCount={value.setCount}/>
        <button className="main-button">BUY NOW</button>
        <button className="button-border" onClick={addToCard}>ADD TO CARD</button>
        <button className="favorite-button"><MdFavoriteBorder size={20} fill="rgba(70, 163, 88, 1)"/></button>
       </div>
        
      </div>
      <div className="addition-data">
    <p>SKU:<span></span></p>
    <p>Categories:<span>{item.categories}</span></p>
    <p>Tags:<span> Home, Garden, Plants</span></p>
      </div>
      <div className="share">
      <h5 className="subtitle">Share this products:</h5>
      <div className="share-icons">
        <FaFacebookF className="share-icon" size={18} />
        <FaInstagram  className="share-icon"size={18}/>
        <FaLinkedinIn className="share-icon" size={18}/>
        <FaTwitter className="share-icon" size={18}/>
        <MdCameraAlt className="share-icon" size={18}/>
      </div>
      </div>
      </div>
      <div className="product-view-descriptions">
      <div className="titlles">
        {descriptionTitles.map((el,ind)=>{
           return  <h5 className={isActiveTitle===el ? "subtitle-description-active" :  "subtitle-description"}
          onClick={()=> setIsActiveTitile(el)}
          key={ind}>{el}</h5>
        })}
      </div>
      {isActiveTitle===descriptionTitles[0] ? <Text/>
      : "Reviews"}
      </div>
    
    </section>
      <Releted/>

    </>
}
export default SingleProduct;