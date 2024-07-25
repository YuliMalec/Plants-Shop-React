import React from 'react';
import styles from './../modal/modal.module.css'
import { IoMdClose } from "react-icons/io";
import letter from './../img/thank-you 1.jpg'

const OrderModal = ({closeOrderModal}) => {
    return (
        <div className={styles.container}>
        <article className={styles.modal}>
          
            <div className={styles.top}>
            <div onClick={closeOrderModal}><IoMdClose size={18}/></div>
            <img src={letter}/>
            <h4>Your order has been received</h4>
         </div> 
         
         </article>  
        </div>
    );
};

export default OrderModal;