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
      {value.card.length<1 ? <h3>Your card is ampty...</h3>:
         <div className={styles.tables}>
            <div className={styles.titles}>
              {cardTitles.map((item,ind)=>{
                return (
                    <div className={styles['title-card']} key={ind}>{item}</div>
                )
              })}</div>
              {value.card.map((item,ind)=>{ 
                return <Table name={item[0]} 
                price={item[1]} id={item[2]} img={item[3]} quantity={item[4]}
                deleteProd={deleteProd}
                setCount={value.setCount}
                />
              })}
         </div>
         }
         <div className={styles['total-prices']}></div>
         
    </section>

    </>
}
export default Card;