import '../shop/shop.css'


import sidebarImg from './../img/sidebar-img.jpg'
import SuperSale from './../img/Super Sale.png'


const category= ['House Plant','Potter Plants','Seeds','Small Plants','Big Plants','Asucculents','Trerrariums','Accesories'];
const size = ['Small','Medium','Large'];
const listLength = [9,12,13,10,13,11,13,13]

function Sidebar(props){

    return <article className="sidebar">
    <div className="categories"><h3 className="categories-title title-sidebar">Gategories</h3>
    <ul className="category-list">{
    category.map((el,ind)=>{
        return <li 
      className={props.cat===el ? "category-link choosen" : "category-link" }
        key={ind} onClick={()=>props.chooseProduct(el)}><span>{el}</span><span>({props.list.length})</span></li>
    })
    }</ul>
    </div>
    <div className="price-range"><h3 className=" range title-sidebar">Price Range</h3>
    <div className="range-slider">
        <div className='range-track'></div>
       <input className='min-val' type='range'onChange={(event)=>props.useMinRangeInput(event)} value={props.minValue} min={9} max={500} />
       <input className='max-val' type='range'onChange={(event)=>props.useMaxRangeInput(event)} value={props.maxValue} min={9} max={500} />
       
    </div>
    <div className="price">Price:<div> $ {props.minValue} - $ {props.maxValue}</div></div>
    <button className="main-button main">Filter</button>
    </div>
    <div className="size">
        <h3 className="title-sidebar">Size</h3>
        <ul className="size-list">
        {size.map((el,index)=>{
            return <li className="size-link" key={index}>{el}</li>
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