import { useState,useEffect,useMemo } from 'react'
import Header from '../header/Header'
import Banner from '../main-banner/Banner'
import { useResize } from '../../hooks/use-resize';
import Shop from '../shop/Shop';
import '../../index.css'
import plants from '../../data/plants.json'

const category= ['House Plant','Potter Plants','Seeds','Small Plants','Big Plants','Asucculents','Trerrariums','Accesories'];

const titles = ['All Plants', 'New Arrives', 'Sale']
console.log(plants.plants)
function App() {


  const { width, isScreenSm, isScreenMd, isScreenLg, isScreenXl } = useResize();
  const [list,setList] = useState([])
  const [isHome,setIsHome] = useState(false)
    const [isSearch,setIsSearch] = useState(true)
const [cat,setCat]=useState(category[0])
const [productTitle,setProductTitle]=useState(titles[0])
const [currentPage,setCurrentPage] = useState(1)
 


    const url = 'https://fakestoreapi.com/products?';

    const chooseProduct=(param = 'House Plant')=>{
        
       setList(plants.plants.filter((el)=> el.categories === param))
   
     setProductTitle(titles[0])
     setCat(param)
     setCurrentPage(1)
      console.log(list)
     } 
     
     useEffect(()=>{
     chooseProduct()
      localStorage.setItem('list',JSON.stringify(list))
    },[])
  let localList =JSON.parse(localStorage.getItem('list'))

function handleInput(){
  setIsHome(!isHome)
  setIsSearch(!isSearch)
 }

  return (
    <div className='wrapper  container'>
      
      <Header handleInput={handleInput}
      isHome={isHome}
      isSearch={isSearch}
      isScreenMd={isScreenMd}
      width={width}/>
      <main>
      <Banner width={width}/>
      
      <Shop currentPage={currentPage}
       chooseProduct={chooseProduct}
       productTitle={productTitle}
       setProductTitle={setProductTitle}
       setCurrentPage={setCurrentPage} 
      localList ={localList}
       setList={setList}
       list={list} cat={cat}
      />
     
     </main>
    </div>
  )
}

export default App
