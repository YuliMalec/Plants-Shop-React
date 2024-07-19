import Context from "../../hooks/Context";
import { useContext,useEffect } from "react";
import styles from './card.module.css'
import Table from "./Table";
import { Link } from "react-router-dom";

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

  let sum =0;
  value.goods.map((el)=>{
     sum +=(el[1].slice(1)*el[4]) 
     
  })
     
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
          <button className="main-button">Apply</button>
          </form>
          <div className={styles['total-counting']}>
            <div className={styles['subtitle-container']}>
            <h5 className={styles.subtitle}>Subtotal</h5>
            <span className={styles['sub-price']}>${sum}</span>
            </div>
            <div className={styles['subtitle-container']}>
            <h5 className={styles.subtitle}>Coupon Discount</h5>
            <span className={styles.sub}>(-) 00.00</span>
            </div>
            <div className={styles['subtitle-container']}>
            <h5 className={styles.subtitle}>Shiping</h5>
            <span className={styles.sub}>$16</span>
            </div>
            <p className={styles.p}>View shipping charge</p>
            </div>
            <div className={styles.total}>
            <div className={styles['title-card']}>Total</div>
            <div className={styles['price-total']}>${sum + 16}</div>
            </div>
            <button className={styles['main-button'] + ' '+ 'main-button'}>Proceed To Checkout</button>
            <Link className={styles.link} to={"/"}>Continue Shopping</Link>

         </div>
          </section>
          } 
   

    </>
}
export default Card;