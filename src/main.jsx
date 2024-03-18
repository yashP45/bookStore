import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import { store } from './app/store.js';
import { Provider } from 'react-redux'
import SignUp from './pages/SignUp.jsx';
import Cart from './pages/Cart.jsx';
import ProductViewPage from './pages/ProductView.jsx';
import Login from './pages/Login.jsx';
import AddNew from './pages/AddNew.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/view/:id",
    element: <ProductViewPage />,
  },
  {
    path: "/addNew",
    element: <AddNew />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={store}>
   <RouterProvider router={router} />
   </Provider>,
  </React.StrictMode>,
)
