import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from "./error-page";
import App from './components/home/App'
import './index.css'
import Shop from './components/shop/Shop';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
     },
      {
        path:"/shop",
        element:<Shop/>,
      }
    
   
    
 
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
)
