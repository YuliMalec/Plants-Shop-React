import React from 'react';
import styles from './card.module.css'
import { AiTwotoneDelete } from "react-icons/ai";


function Table({name,price,id,quantity,img,deleteProd}) {
  let  count = quantity;
    return (
        <div className={styles.table}>
            <div className={styles.prod}>
             <div className={styles.img}><img src={img}/></div>
            <div className={styles.name}>{name}</div>
            </div>
            <div className={styles.price}>{price}</div>
            <div className={styles.quantity}>{quantity}
                </div>
            <div className={styles.total}>${price.slice(1)*quantity}</div>
            <div className={styles.delete} onClick={()=>deleteProd(id)}><AiTwotoneDelete size={24}/></div>
        </div>
    );
}

export default Table;