import React from 'react';
import styles from './billing.module.css'
import { MdKeyboardArrowDown } from "react-icons/md";

const Inputs = () => {
    return (
        <div className={styles['input']}> 
        <div className={styles['inputs-block']}>
        <div className={styles['input-title']}>
                   <h4 className={styles.subtitle}>First Name<span>*</span></h4>
                   <input defaultValue={''} />
               </div>
               <div className={styles['input-title']}>
                        <h4 className={styles.subtitle}>Last Name<span>*</span></h4>
                        <input defaultValue={''}/>
                    </div>
                    </div>
                    <div className={styles['inputs-block']}>
               <div className={styles['input-title']}>
                   <h4 className={styles.subtitle}>Country / Region<span>*</span></h4>
                   <input defaultValue={''} placeholder='Select a country / region' />
               </div>
               <div className={styles['input-title']}>
                        <h4 className={styles.subtitle}>Town / City<span>*</span></h4>
                        <input defaultValue={''}/>
                        </div>
                         </div>
                         <div className={styles['inputs-block']}>
               <div className={styles['input-title']}>
                   <h4 className={styles.subtitle}>Street Address<span>*</span></h4>
                   <input defaultValue={''} placeholder='House number and street name' />
               </div>
               <div className={styles['input-title']}>
                        <input defaultValue={''} placeholder='Appartment, suite, unit, etc. (optional)'/>
                    </div>
                    </div>
               <div className={styles['inputs-block']}>
               <div className={styles['input-title']}>
                   <h4 className={styles.subtitle}>State<span>*</span></h4>
                   <input defaultValue={''} placeholder='Select a state'/>
               </div>
               <div className={styles['input-title']}>
                        <h4 className={styles.subtitle}>Zip<span>*</span></h4>
                        <input defaultValue={''}/>
                    </div> 
                      </div>
              
               <div className={styles['inputs-block']}> 
               <div className={styles['input-title']}>
                   <h4 className={styles.subtitle}>Email address<span>*</span></h4>
                   <input defaultValue={''}/>
               </div>
               <div className={styles['input-title']}>
                        <h4 className={styles.subtitle}>Phone Number<span>*</span></h4>
                        <span className={styles.number}>
                        <input readOnly={'+966'}/>
                        <MdKeyboardArrowDown />
                        <input type='number' defaultValue={''}/>
                        </span>
                    </div>
                    </div>
               <div className={styles['inputs-block']}>
               <div className={styles['input-title'] + ' '+ 'check'}>
               <h4 className={styles.subtitle}>Ship to a different address?</h4>
                   <input type='checkbox' />
               </div>
               <div className={styles['input-title']}>
                   <h4 className={styles.subtitle}>Order notes (optional)</h4>
                   <textarea defaultValue={''} />
               </div>
               </div>
               
   </div>
    );
};

export default Inputs;