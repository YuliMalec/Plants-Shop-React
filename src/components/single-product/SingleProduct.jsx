import { Link,useParams } from "react-router-dom";
import Context from '../../hooks/Context';
import plants from '../../data/plants.json'
import Header from "../header/Header";
import Footer from "../footer/Footer";


function SingleProduct(){
    let params = useParams()
    const item = plants.plants.find((el)=>el.id===params.id)
console.log(item.name)
    return <>
      
   <div className='wrapper  container'>
  
   <main>  <h3 className="product-view-path"></h3>
    <section className="product-view">
      <div className="product-view-image">
        <div className="vertical-img">
            <img src={item.img}/>
        </div>
        <div className="vertical-img">
        <img src={item.img}/>
        </div>
        <div className="vertical-img">
        <img src={item.img}/>
        </div>
        <div className="vertical-img">
        <img src={item.img}/>
        </div>
        <div className="big-img">
        <img src={item.img}/>
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
      <div className="product-view-descriptions"></div>
    </section>
   </main>
<Footer/>
    </div></>
}
export default SingleProduct;