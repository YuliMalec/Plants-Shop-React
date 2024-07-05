import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux';
import { createStore } from "redux";
import {modalIsOpen} from './redusers/reduser'
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from "./error-page";
import App from './components/home/App'
import AppRoutes from './components/AppRoutes';
const store = createStore(modalIsOpen)
store.dispatch({type:'Toggle'})


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
 <BrowserRouter>
 <AppRoutes/>
 </BrowserRouter>
 </Provider>
)
