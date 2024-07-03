import { useState,useEffect,useMemo } from 'react';
import Context from '../../hooks/Context';

import Header from '../header/Header'
import Banner from '../main-banner/Banner'
import { useResize } from '../../hooks/use-resize';
import Shop from '../shop/Shop';
import '../../index.css'
import plants from '../../data/plants.json'
import MaskGroup from '../maskGroup/MaskGroup';
import BlogPost from '../blogPost/BlogPost';
import Footer from '../footer/Footer';
import ModalWindow from '../modal/ModalWindow';

const category= ['House Plant','Potter Plants','Seeds','Small Plants','Big Plants','Asucculents','Trerrariums','Accesories'];

const titles = ['All Plants', 'New Arrives', 'Sale']


function App() {
  const { width, isScreenSm, isScreenMd, isScreenLg, isScreenXl } = useResize();
  const [list,setList] = useState([])
  const [modalIsOpen, setIsOpen] = useState(false); 
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
  setIsShowSidebar,
isShowSidebar,
modalIsOpen,setIsOpen,openModal,
filter,setFilter,
chooseTitleSize,setChooseTitleSize,
querystring,setQueryString


 }

  return (
    <Context.Provider value={value}>
    <div className='wrapper  container ' id='main'>
      
      <Header openModal={openModal} 
     querystring={querystring} setQueryString={setQueryString}

      />
      <main >
     {modalIsOpen && <ModalWindow modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}/>}
      <Banner width={width}/>
      
      <Shop/>
     <MaskGroup/>
     <BlogPost/>
     </main>
     <Footer/>
    </div>
    </Context.Provider>
  )
}

export default App
