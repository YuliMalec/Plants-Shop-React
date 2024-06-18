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

const category= ['House Plant','Potter Plants','Seeds','Small Plants','Big Plants','Asucculents','Trerrariums','Accesories'];

const titles = ['All Plants', 'New Arrives', 'Sale']

function App() {


  const { width, isScreenSm, isScreenMd, isScreenLg, isScreenXl } = useResize();
  const [list,setList] = useState([])
  
const [cat,setCat]=useState(category[0])
const [productTitle,setProductTitle]=useState(titles[0])
const [currentPage,setCurrentPage] = useState(1)
 const [isShowSize, setIsShowSize]=useState(false)
 const [size,setSize] = useState([]);
 const[isShowSidebar,setIsShowSidebar] = useState(false)
 const [prod,setProd]=useState(1)
    const url = 'https://fakestoreapi.com/products?';

    const chooseProduct=(param = 'House Plant')=>{
        
       setList(plants.plants.filter((el)=> el.categories === param))
      setIsShowSize(false)
     setProductTitle(titles[0])
     setCat(param)
     setCurrentPage(1)
     if(isShowSidebar){
       setIsShowSidebar(!isShowSidebar)
     }
 
     } 
     
     useEffect(()=>{
     chooseProduct()
   
    },[])

    



 const value = {

  width,

  isScreenMd,
  isScreenSm,
  currentPage,size,setSize,
  chooseProduct,productTitle,
  setProductTitle,
  setCurrentPage,setIsShowSize,isShowSize,
  setList,list,cat,
  setIsShowSidebar,
isShowSidebar,prod,setProd

 }

  return (
    <Context.Provider value={value}>
    <div className='wrapper  container'>
      
      <Header />
      <main>
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
