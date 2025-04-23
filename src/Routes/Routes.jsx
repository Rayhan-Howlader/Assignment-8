import React from 'react';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPages from '../Pages/ErrorPages/ErrorPages';
import Home from '../Pages/Home/Home';
import DoctorDetails from '../Pages/DoctorDetails/DoctorDetails';
import MyBooking from '../Pages/MyBooking/MyBooking';
import Contact from '../Components/Contact/Contact';
import Blogs from '../Components/Blogs/Blogs';


export const router = createBrowserRouter([
    {
      path: "/",
      Component:Root,
      errorElement: <ErrorPages></ErrorPages>,
      children: [
        {
          index:true,
          loader:()=>fetch('/Doctors.json'),
          path:"/",
          Component:Home,
        },
        {
          path:'/myBooking',
          loader:()=>fetch('/Doctors.json'),
          Component:MyBooking
        },
        {
          path:'/doctorDetails/:id',
          loader:()=>fetch('/Doctors.json'),
          Component:DoctorDetails
        },
        {
          path:'/contact',
          Component:Contact
        },
        {
          path:'/blogs',
          loader:()=>fetch('/blogs.json'),
          Component:Blogs
        }
      ]
    },
  ]);