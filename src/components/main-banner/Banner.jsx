import './banner.css'
import bigImg from './../img/main-big.svg';
import littleImg from './../img/main-little.svg';
import arrow from './../img/Arrow - Right.png';


function Banner({width}){


    return(<div className='banner'>
     <article className='content'>
      <div className='sub-title'>WELCOME TO GREENSHOP</div>
      <div className='main-title'>LET'S MAKE A BETTER <span>PLANET</span></div>
      <div className='text'>We are an online plant shop offering a wide range of cheap and trendy plants.<span> Use our plants to create an unique Urban Jungle. Order your favorite plants!</span></div>
      <button className='main-button main'>SHOP NOW{width <= 768 && <img src={arrow}/> }</button>
     </article>
     <article className='img-part'>
           <div className='big-img'><img src={bigImg}/></div>
           <div className='little-img'><img src={littleImg}/></div>
     </article>
    </div>)
}
export default Banner;