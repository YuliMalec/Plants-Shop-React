import { Link,useParams } from "react-router-dom";
import Context from '../../hooks/Context';
import plants from '../../data/plants.json'
import Header from "../header/Header";
import Footer from "../footer/Footer";
import './single-product.css'
import search from './../img/search.svg'
import { useState } from "react";


function SingleProduct(){
    let params = useParams()
    const item = plants.plants.find((el)=>el.id===params.id)
    const [isShowImg,setIsShowImg] = useState(false)

    function getShowImg(e){
    console.log(e.target)
    setIsShowImg(!isShowImg)
    }
    return <>
      
   <div className='wrapper  container'>
  <Header/>
   <main>  <h3 className="product-view-path">Home / Shop</h3>
    <section className="product-view">
      <div className="product-view-image">
        <div className="vertical-imges">
          {}
        <div className={isShowImg?"vertical-img active":'vertical-img'}  onClick={(e)=>getShowImg(e)}>
            <img src={item.img}/>
        </div>
        <div className={isShowImg?"vertical-img active":'vertical-img'} onClick={(e)=>getShowImg(e)}>
        <img src={item.img}/>
        </div>
        <div className={isShowImg?"vertical-img active":'vertical-img'}onClick={(e)=>getShowImg(e)}>
        <img src={item.img}/>
        </div>
        <div className={isShowImg?"vertical-img active":'vertical-img'}onClick={(e)=>getShowImg(e)}>
        <img src={item.img}/>
        </div>
        </div>
        <div className="big-img">
          <div className="big-img-icon" >
            <img  src={search} />
          </div>
          <div className="big-img-img">
        <img src={item.img}/></div>
        </div>
      </div>
      <div className="product-view-details">
        <h4 className="product-view-title">{item.name}</h4>
      <div className="price-rating">
        <div className="price">{item.price}</div>
        <div className="rating"></div>
      </div>
      <div className="short-dect">
         <h5 className="subtitle">Short Description:</h5>
         <div className="short-dect-text">
            <p>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. </p>
         </div>
      </div>
      <div className="product-size">
      <h5 className="subtitle">Size:</h5>
      <div className="size-choose"></div>
      </div>
      <div className="addition-data">
    <p>SKU:<span></span></p>
    <p>Categories:<span>{item.categories}</span></p>
    <p>Tags:<span></span></p>
      </div>
      <div className="share">
      <h5 className="subtitle"></h5>
      <div className="share-icons"></div>
      </div>
      </div>
      <div className="product-view-descriptions">
      <div className="titlles">
      <h5 className="subtitle-description">Product Description</h5>
      <h5 className="subtitle-description">Reviews (19)</h5></div>
      <p>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.

Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. </p>
      <h5 className="subtitle">Living Room:</h5>
      <p>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <h5 className="subtitle">Dining Room:</h5>
      <p>The benefits of houseplants are endless. In addition to cleaning the air of harmful toxins, they can help to improve your mood, reduce stress and provide you with better sleep. Fill every room of your home with houseplants and their restorative qualities will improve your life.</p>
      <h5 className="subtitle">Office:</h5>
      <p>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      </div>
    </section>
   </main>
<Footer/>
    </div></>
}
export default SingleProduct;