import '../shop/shop.css'


import sidebarImg from './../img/sidebar-img.jpg'
import SuperSale from './../img/Super Sale.png'
import PriceRange from './PriceRange';


const category= ['House Plant','Potter Plants','Seeds','Small Plants','Big Plants','Asucculents','Trerrariums','Accesories'];
const size = ['Small','Medium','Large'];
const listLength = [9,12,13,10,13,11,13,13]

  
function Sidebar(props){
    
    function getFilter(){
  
  props.value.setFilter({...props.value.filter,price:true})
        props.value.setIsShowSidebar(!props.value.isShowSidebar)
    }
  

    return <article className="sidebar">
    <div className="categories"><h3 className="categories-title title-sidebar">Gategories</h3>
    <ul className="category-list">{
    category.map((el,ind)=>{
        return <li 
      className={props.value.cat===el ? "category-link choosen" : "category-link" }
        key={ind} onClick={()=>props.value.chooseProduct(el)}><span>{el}</span><span>({listLength[ind]})</span></li>
    })
    }</ul>
    </div>
  <PriceRange getFilter={getFilter} setMaxValue={props.setMaxValue}
  setMinValue={props.setMinValue}
  minValue={props.minValue} maxValue={props.maxValue}
  />
    <div className="size">
        <h3 className="title-sidebar">Size</h3>
        <ul className="size-list">
        {size.map((el,index)=>{
            return <li className="size-link" onClick={()=>props.chooseSize(el)}key={index}>{el}</li>
        }
         
    )}
        </ul>
    </div>
    <div className="sidebar-img">
        <img src={SuperSale} className="sidebar-img-super"/>
        <div className="sidebar-img-text">UP TO 75% OFF</div>
        <img src={sidebarImg} className="sidebar-img-plant"/></div>
</article>
}

export default Sidebar;