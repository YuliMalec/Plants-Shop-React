import React, { forwardRef } from 'react';
import styles from './card.module.css'
import Context from "../../hooks/Context";
import { useContext } from "react";



function TotalPrice() {
  const value = useContext(Context)
    let sum =0;
    value.goods.map((el)=>{
       sum +=(el[1].slice(1)*el[4]) 
       
    })
   
    return (
       <> <div className={styles['total-counting']}>
       <div className={styles['subtitle-container']}>
       <h5 className={styles.subtitle}>Subtotal</h5>
  <span  className={styles['sub-price']} >${sum}</span>
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
       </div></>
    );
}

export default  TotalPrice;