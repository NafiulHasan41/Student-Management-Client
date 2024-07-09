import {
    createBrowserRouter,
  } from "react-router-dom";

import ErrorPage from "../Pages/ErrorPage";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "./PrivateRoutes";
import AddStudent from "../Pages/AddStudent";
import ManageStudent from "../Pages/ManageStudent";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard/>,
      errorElement:<ErrorPage/>  ,
      children: [
        {
            index: true,
            element: <PrivateRoute><AddStudent/></PrivateRoute>
        }, 
        {
            path: "/availableCamps",
            element:<PrivateRoute><ManageStudent/></PrivateRoute>
        }, 
        {
            path:"/login",
            element:<Login/>
        },
        {
            path:"/register",
            element:<Register/>
        },
       
    ]
    },
   
    

]);