import React from 'react'
import styles from './releted.module.css'
import plants from './../../data/plants.json'
import Swiper from './Swiper'




export default function Releted() {
   
     let releted = []
    const getRundomInd =(max)=> Math.floor(Math.random() * Math.floor(max));
 
    while(releted.length != 10){
        let index = getRundomInd(plants.plants.length)
        
        releted.push(plants.plants[index])
        releted = releted.filter((v, i, arr) =>  arr.indexOf(v) == i);
    }

  return (
   <>
   <section className={styles.container}>
        <h3 className={styles.title}>You may be interested in</h3>
        <Swiper releted={releted}/>
        </section>
     
 </>
  )
}
