import { BrowserRouter, Route,Routes as ReactRoutes  } from "react-router-dom";
import App from "./home/App";
import Card from "./card/Card";
import SingleProduct from "./single-product/SingleProduct";


function AppRoutes(){
     return (
        
       <ReactRoutes>
        <Route exact path="/" index element={<App/>}/> 
       <Route path='/shop/:id' element={<SingleProduct/>}/>
        <Route exact path="/card" element={<Card/>}/>
     
       </ReactRoutes>
       
     )
}
export default AppRoutes