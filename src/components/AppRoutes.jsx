import { BrowserRouter, Route,Routes as ReactRoutes  } from "react-router-dom";
import { Routes } from "react-router-dom";
import App from "./home/App";
import Card from "./card/Card";
import SingleProduct from "./single-product/SingleProduct";
import Home from "./home/Home";
import Billing from "./billing/Billing";


function AppRoutes(props){
  
     return (
        
       <Routes>
        <Route  path="/" index element={<Home />}/> 
       <Route path='/shop/:id' element={<SingleProduct/>}/>
        <Route exact path="/card" element={<Card/>}/>
        <Route path='/checkout' element={<Billing/>}/>
     
       </Routes>
       
     )
}
export default AppRoutes