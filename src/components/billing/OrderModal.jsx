import React from 'react';
import styles from './../modal/modal.module.css'
import { IoMdClose } from "react-icons/io";
import letter from './../img/thank-you 1.jpg'
import { Link } from 'react-router-dom';

const OrderModal = ({takeOrder,closeOrderModal,goods,isChecked,totalSum}) => {
    const getRundomNum =(max)=> Math.floor(Math.random() * Math.floor(max));
   
   
    
   const  getOrderNumber = ()=>{
       let orderNumber = '';  
       while(orderNumber.length <=8){
     
     orderNumber+=getRundomNum(9)
    } 
       return orderNumber
    }

   const getCurrentDate =()=>{
    let data = new Date()
    let month = data.getMonth() + 1
   return data.getDate() + '.'+ (month >=9?month:'0'+month)+'.'+data.getFullYear()+'.'
   
   }
   console.log(getCurrentDate())
  
    return (
        <div className={styles['container-modal']}>
        <article className={styles.modal}>
          
            <div className={styles.top}>
            <div onClick={closeOrderModal}className={styles.close} ><IoMdClose fill={'hsl(132, 40%, 46%)'}size={18}/></div>
            <img src={letter}/>
            <h4 className={styles.name}>Your order has been received</h4>
         </div> 
         <ul className={styles.tables}>
           <li className={styles.table}>
            <h5 className={styles.title}>Order Number</h5>
            <div className={styles.info} >{getOrderNumber()}</div>
           </li>
           <li className={styles.table}>
            <h5 className={styles.title}>Date</h5>
            <div className={styles.info} >{getCurrentDate()}</div>
           </li>
           <li className={styles.table}>
            <h5 className={styles.title}>Total</h5>
            <div className={styles.info} >$ {totalSum}</div>
           </li>
           <li className={styles.table}>
            <h5 className={styles.title}>Payment Method</h5>
            <div className={styles.info} >{isChecked}</div>
           </li>
         </ul>
         <div className={styles.wrapped}>
         <div className={styles['order-titles']}>
          <h4 className={styles['order-title']}>Order Details <div>Products</div> </h4>
          <h4 className={styles['order-title']}>Qty</h4>
          <h4 className={styles['order-title']}>Subtotal</h4>
         </div>
         <div className={styles.products}>
            {goods.map(el=>{
              console.log(el)
 return (
  <div className={styles.product}>
    <div className={styles.base}>
    <div className={styles['product-img']}>
      <img src={el[3]}/>
    </div>
    <h4 className={styles['product-name']}>{el[0]}</h4>
     </div>
     <div className={styles.quantity}>
      {el[4]}</div>
    <div className={styles.price}>$ {Number(el[1].slice(1))*el[4]}</div>
  
    </div>
 )
            }
            )}
         </div>
         <div className={styles.p}>
          <div className={styles['p-name']}>Shiping</div>
          <div className={styles['p-price']}>$ 16</div>
          </div>
         <div className={styles.total}>
          <div className={styles['total-name']}>  Total</div>
          <div className={styles['total-price']}>  ${totalSum}</div>
        </div>
         <p className={styles.text}>Your order is currently being processed. You will receive an order confirmation email shortly with the expected delivery date for your items.</p>
         <Link className={styles['order-button']} onClick={takeOrder}>Track your order</Link>
        </div> </article>  
        </div>
    );
};

export default OrderModal;