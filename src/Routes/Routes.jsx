import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import AddTask from "../Dashboard/AddTask/AddTask";
import MyTask from "../Dashboard/MyTask/MyTask";
import UpdateItem from "../Dashboard/UpdateItem/UpdateItem";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
          path:"/",
          element:<Home></Home>, 
        },
        {
          path:"/login",
          element:<Login></Login>,
        },
        {
          path:"/signup",
          element:<SignUp></SignUp>
        }
      ]
    },
    {
      path:"/dashboard",
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:"/dashboard/createnewtask",
          element:<AddTask></AddTask>,
        },
        {
          path:"/dashboard/mytask",
          element:<MyTask></MyTask>,
        },
          {
  
            path: '/dashboard/updateItem/:id',
            element: <UpdateItem></UpdateItem>,
            loader: () => fetch("https://task-pro-server-dun.vercel.app/alltask")
        
        }
      ]
    }
  ]);