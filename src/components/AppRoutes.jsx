import { BrowserRouter, Route,Routes as ReactRoutes  } from "react-router-dom";
import { Routes } from "react-router-dom";
import App from "./home/App";
import Card from "./card/Card";
import SingleProduct from "./single-product/SingleProduct";
import Home from "./home/Home";


function AppRoutes(props){
  
     return (
        
       <Routes>
        <Route  path="/" index element={<Home />}/> 
       <Route path='/shop/:id' element={<SingleProduct/>}/>
        <Route exact path="/card" element={<Card/>}/>
     
       </Routes>
       
     )
}
export default AppRoutes