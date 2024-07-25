
import styles from './card.module.css'
import  TotalPrice from "./TotalPrice";
import Releted from "../releted/Releted";
import { Link } from "react-router-dom";
import Table from "./Table";
import Context from "../../hooks/Context";
import { useContext,useEffect } from "react";

const cardTitles = ['Products','Price','Quantity','Total','Del']


function Card(){
  const value = useContext(Context)
 
  
  function deleteProd (id){
     value.setCard( value.card.filter(item=>item[2]!==id) )  
       value.setGoods(value.card.filter(item=>item[2]!==id))
       console.log('1')  
  }
  


  
    useEffect(()=>{
   
      value.setGoods(JSON.parse(localStorage.getItem('card')));
     
  },[])


     
    return <>
    <h3 className="product-view-path">Home / Shop / Shopping Cart </h3>
   
      {value.goods.length<1 ? <h3>Your card is ampty...</h3>: 
   <section className={styles.wrap}>
   <div className={styles.tables}>
      <div className={styles.titles}>
        {cardTitles.map((item,ind)=>{
          return (
              <div className={styles['title-card']} key={ind}>{item}</div>
          )
        })}</div>
        { value.goods.map((item,ind)=>{
          
          return <Table name={item[0]} 
        
          price={item[1]} id={item[2]} img={item[3]} quantity={item[4]}
        
          deleteProd={deleteProd}
          setCount={value.setCount}
          key={ind}
        
          />
        })}
   </div>
 
   <div className={styles['total-prices']}>
        <div className={styles['title-card']}>Cart Totals</div>
        <h5 className={styles.subtitle}>Coupon Apply</h5>
        <form className={styles.form}>
        <input placeholder="Enter coupon code here..." />
        <button className={styles['main-button']}>Apply</button>
        </form>
       <TotalPrice/>
          <Link to={'/checkout'} className={styles['main-button']}>Proceed To Checkout</Link>
          <Link className={styles.link} to={"/"}>Continue Shopping</Link>
    
       </div>
    </section>
          } 
      <Releted/>

    </>
}
export default Card;