import React from 'react';
import styles from './../modal/modal.module.css'
import { IoMdClose } from "react-icons/io";
import letter from './../img/thank-you 1.jpg'

const OrderModal = ({closeOrderModal,goods,isChecked,totalSum}) => {
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
        <div className={styles.container}>
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
         </article>  
        </div>
    );
};

export default OrderModal;