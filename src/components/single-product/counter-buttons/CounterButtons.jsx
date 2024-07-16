
function CounterButtons ({count,setCount}){
   
    return <>
     <div className="input-counter">
          <button className="in-count" onClick={()=>setCount(count+1)}>+</button>
        <span  className="put-count">{count>=1 ? count : 1}</span>
        <button className="in-count"onClick={()=>setCount(count-1)} >-</button>
        </div>
    </>
}
export default CounterButtons;