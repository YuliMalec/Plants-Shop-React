import { useState,useEffect } from 'react';
import Context from '../../hooks/Context';
import Header from '../header/Header'
import { useResize } from '../../hooks/use-resize';
import '../../index.css'
import plants from '../../data/plants.json'
import Footer from '../footer/Footer';
import ModalWindow from '../modal/ModalWindow';
import AppRoutes from '../AppRoutes';
import MobileMenu from '../shop/MobileMenu';
import { setItem } from 'localforage';



const category= ['House Plant','Potter Plants','Seeds','Small Plants','Big Plants','Asucculents','Trerrariums','Accesories'];

const titles = ['All Plants', 'New Arrives', 'Sale']


function App() {


 /**/ const { width, isScreenSm, isScreenMd, isScreenLg, isScreenXl } = useResize();
  const [list,setList] = useState([])
  const [modalIsOpen, setIsOpen] = useState(false); 
const [cat,setCat]=useState(category[0])
const [currentPage,setCurrentPage] = useState(1)
 const [isShowSize, setIsShowSize]=useState(false)
 const [size,setSize] = useState([]);
 const [chooseTitleSize,setChooseTitleSize] = useState('')
 const[isShowSidebar,setIsShowSidebar] = useState(false)
 const [querystring,setQueryString] = useState('uj')
 const [totalSum,setTotalSum] = useState(0)
 const [card,setCard] = useState(()=>{
  let card = null;
  try{
    card = JSON.parse(localStorage.getItem('card'))
  } catch (e){}
  return Array.isArray(card) ? card : [];
 })
 const [count,setCount] = useState(1);

 const [goods,setGoods] = useState([])
 
 const [filter,setFilter] = useState({title:titles[0],query:false,price:false,sort:'Defolt sorting'})  
    const url = 'https://fakestoreapi.com/products?';

    const chooseProduct=(param = 'House Plant')=>{
    
       setList(plants.plants.filter((el)=> el.categories === param))
      setIsShowSize(false) 
        setQueryString('')
    setFilter({...filter,title:titles[0]})
     setCat(param)
     setCurrentPage(1)
     setChooseTitleSize('')
     if(isShowSidebar){
       setIsShowSidebar(!isShowSidebar)
     }

     } 
    
     useEffect(()=>{
     chooseProduct()
   
    },[])

    
   useEffect(()=>{
   
     window.localStorage.setItem('card', JSON.stringify(card));
 
   },[card.length])

 
    function openModal() {
      setIsOpen(true);
    }
 const value = {
  width,
  isScreenMd,
  isScreenSm,
  currentPage,size,setSize,
  chooseProduct,
  setCurrentPage,setIsShowSize,isShowSize,
  setList,list,cat,
modalIsOpen,setIsOpen,openModal,
filter,setFilter,
chooseTitleSize,setChooseTitleSize,
querystring,setQueryString,
card,setCard,
count,setCount,
isShowSidebar,setIsShowSidebar,
goods,setGoods,
totalSum,setTotalSum


 }

  return (
    <Context.Provider value={value}>
    <div className='wrapper  container ' id='main'>
      
      <Header openModal={openModal} 
     querystring={querystring} setQueryString={setQueryString}

      />
      <main >
     {modalIsOpen && <ModalWindow modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}/>}
     <AppRoutes/>
     {width < 431 && 
<MobileMenu />}
     </main>
   
     <Footer/>
    </div>
    </Context.Provider>
  )
}

export default App
