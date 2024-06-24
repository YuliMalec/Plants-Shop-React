import React from 'react'
import ReactDOM from 'react-dom/client'
import Modal from 'react-modal';
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from "./error-page";
import App from './components/home/App'
import AppRoutes from './components/AppRoutes';



ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <AppRoutes/>
 </BrowserRouter>
)
