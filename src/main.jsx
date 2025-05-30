import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App.jsx'


import {
  RouterProvider,
} from "react-router";
import { router } from './Routes/Routes.jsx';





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer position="top-right" autoClose={2000} />
  </StrictMode>,
)
