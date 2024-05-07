
function Pagination(props){
  const pageNumber = []

  for(let i = 1; i<=Math.ceil(props.totalPage/props.limitPage);i++){
    pageNumber.push(i)
  }
 

  return (<nav className="navigation">
    {
       pageNumber.map(number=>(
       <button className={props.currentPage === number ? "nav nav-active":"nav"}onClick={()=>props.paginate(number)} key={number}>{number}</button>
       ))
    }
  </nav>)

}
export default Pagination;