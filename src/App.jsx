import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  DashboardLayout,
  Error,
  Register,
  Login,
  Admin,
  AddJob,
  Stats,
  AllJobs,
  Profile,
} from './pages';

const router = createBrowserRouter([
  {
   path:"/",
   element:<HomeLayout />,
   errorElement:<Error />,
   children:[
    {
      index:true,
      element:<Landing />
     },
    {
      path:"register",
      element:<Register />
     },
     {
      path:"login",
      element:<Login />
     }
     
   ]

  },
  {
    path: 'dashboard',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <AddJob />,
      },
      { path: 'stats', element: <Stats /> },
      {
        path: 'all-jobs',
        element: <AllJobs />,
      },

      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'admin',
        element: <Admin />,
      },
    ],
  },
  
]);

export default function App(){
return <RouterProvider router={router} />

}



