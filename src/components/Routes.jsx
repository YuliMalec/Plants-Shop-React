import { BrowserRouter, Route,Routes as ReactRoutes  } from "react-router-dom";
import App from "./home/App";
import Shop from "./shop/Shop";

export function Routes(){
     return (
        <BrowserRouter>
       <ReactRoutes>
         
       <Route path="/shop" element={<Shop/>}/>
        <Route path="/" element={<App/>}/>
       </ReactRoutes>
        </BrowserRouter>
     )
}