
function CounterButtons (props){
     
    return <>
     <div className="input-counter">
          <button className="in-count" onClick={()=>props.setCount(props.count+1)}>+</button>
        <span  className="put-count">{props.count>=1 ? props.count : 1}</span>
        <button className="in-count"onClick={()=>props.setCount(props.count-1)} >-</button>
        </div>
    </>
}
export default CounterButtons;