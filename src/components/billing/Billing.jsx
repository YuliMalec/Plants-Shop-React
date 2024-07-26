import React from 'react';
import styles from './billing.module.css';

import TotalPrice from '../card/TotalPrice';
import Context from '../../hooks/Context';
import { useContext,useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import image from './../img/image 17.jpg';
import Inputs from './Inputs';
import OrderModal from './OrderModal';



const check = ['<img src={image}/>','Dorect bank transfer','Cash on delivery']

function Billing(props) {
    const [isChecked,setIsChecked ]= useState(check[0])
    const [isOrder,setIsOrder] = useState(false)
    
const value = useContext(Context)

useEffect(()=>{
   
    value.setGoods(JSON.parse(localStorage.getItem('card')));
   
},[])

function closeOrderModal(){
setIsOrder(false)
    
}
    
    return(
        <section className={styles.container}>
            <article className={styles.adress}>
                <h4 className={styles.title}>Billing Address</h4>
                
                 <Inputs/>
                 
               
            </article>
            {isOrder && <OrderModal 
            isChecked={isChecked}
            goods={value.goods} 
            closeOrderModal={closeOrderModal}
            totalSum={value.totalSum}
            />}
            <article className={styles.order}>
            <h4 className={styles.title}>Your Order</h4>
            <div className={styles['order-container']}>
                <div className={styles.titles}>
                    <h5 className={styles.title}>Products</h5>
                    <h5 className={styles.title}>Subtotal</h5>
                </div>
                <div className={styles.products}>
                      {value.goods.map(el=>{
                        return (
                            <div className={styles.product}> 
                            <div className={styles['img-cont']}>
                                <div className={styles.img}>
                                    <img src={el[3]}/>  
                                </div>
                              <div className={styles.name}>{el[0]}</div>
                              </div>
                                <div className={styles.quantity}>(× {el[4]})</div>
                                <div className={styles.price}>{el[1]}</div>
                            </div>
                        )
                      })} 
                </div>
              
            </div>  
            <Link className={styles.link}>  Have a coupon code? <span>Click here </span></Link>
                <TotalPrice />
                <div className={styles.payment}>
                <h4 className={styles.title}>Payment Method</h4> 
                <div className={styles.inputs}>
                    {check.map((item,ind)=>{
                       
                        return(
                            <div key={ind}className={isChecked===item ?styles['active']: styles['input-check']} onClick={()=>setIsChecked(item)}>
                   <div className={styles.check}></div>
                    <p>{ind===0 ? <img src={image}/>  :item }</p>
                    </div>  
                        )
                    })}
              
                  
                </div>
                <Link className={styles.button + ' '+ 'main-button'} onClick={()=>setIsOrder(!isOrder)}>Place Order</Link>
                </div>
            </article>
        </section>
    );
}

export default Billing;