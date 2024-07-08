import { useState,useEffect,useMemo } from 'react';
import Context from '../../hooks/Context';
import AppRoutes from '../AppRoutes';
import Header from '../header/Header'
import Home from './Home';
import { useResize } from '../../hooks/use-resize';

import '../../index.css'
import plants from '../../data/plants.json'

import Footer from '../footer/Footer';
import ModalWindow from '../modal/ModalWindow';
import { createStore } from "redux";
import {useDispatch,useSelector } from 'react-redux';

const category= ['House Plant','Potter Plants','Seeds','Small Plants','Big Plants','Asucculents','Trerrariums','Accesories'];

const titles = ['All Plants', 'New Arrives', 'Sale']


function App() {
  const { width, isScreenSm, isScreenMd, isScreenLg, isScreenXl } = useResize();
  const [list,setList] = useState([])
  
const [cat,setCat]=useState(category[0])
const [currentPage,setCurrentPage] = useState(1)
 const [isShowSize, setIsShowSize]=useState(false)
 const [size,setSize] = useState([]);
 const [chooseTitleSize,setChooseTitleSize] = useState('')
 const[isShowSidebar,setIsShowSidebar] = useState(false)
 const [querystring,setQueryString] = useState('')
 const [isAddToCard,setIsAddToCard] = useState(false)
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

    
const dispatch = useDispatch()
const isModal = useSelector(state=>state.isModal)
const openModal = () =>{
      dispatch({type:'Toggle',payload:'open'})
    }
    const closeModal=()=> {
      dispatch({type:'Close',payload:'close'})
    }

  console.log(isModal)

 const value = {
  width,
  isScreenMd,
  isScreenSm,
  currentPage,size,setSize,
  chooseProduct,
  setCurrentPage,setIsShowSize,isShowSize,
  setList,list,cat,
  setIsShowSidebar,
isShowSidebar,
filter,setFilter,
chooseTitleSize,setChooseTitleSize,
querystring,setQueryString


 }

  return (
    <Context.Provider value={value}>
    <div className='wrapper  container ' id='main'>
      
      <Header openModal={openModal} 
     querystring={querystring} setQueryString={setQueryString}/>
      <main >
     {isModal==='open' && <ModalWindow  closeModal={closeModal} />}

    <Home width={width}/>
  
     </main>
     <Footer/>
    </div>
    </Context.Provider>
  )
}

export default App
