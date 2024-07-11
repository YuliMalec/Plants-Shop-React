import Context from "../../hooks/Context";
import { useContext } from "react";
import styles from './card.module.css'
import Table from "./Table";

const cardTitles = ['Products','Price','Quantity','Total','Del']

function Card(){
    const value = useContext(Context)
  
    function deleteProd (id){
       value.setCard(value.card.filter(item=>item[2]!==id) )  
        
     
    }
    return <>
   
    <h3 className="product-view-path">Home / Shop / Shopping Cart </h3>
    <section className={styles.wrap}>
         <div className={styles.tables}>
            <div className={styles.titles}>
              {cardTitles.map((item,ind)=>{
                return (
                    <div className={styles['title-card']} key={ind}>{item}</div>
                )
              })}</div>
              {value.card.map((item)=>{
                return <Table name={item[0]} 
                price={item[1]} id={item[2]} quantity={value.count}
                deleteProd={deleteProd}
                />
              })}
         </div>
         <div className={styles['total-prices']}></div>
    </section>

    </>
}
export default Card;