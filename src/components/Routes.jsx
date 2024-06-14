import { BrowserRouter, Route,Routes as ReactRoutes  } from "react-router-dom";
import App from "./home/App";
import Shop from "./shop/Shop";
import SingleProduct from "./shop/SingleProduct";


export function Routes(){
     return (
        <BrowserRouter>
       <ReactRoutes>
         
       <Route element={<SingleProduct/>}/>
        <Route path="/" element={<App/>}/>
       </ReactRoutes>
        </BrowserRouter>
     )
}