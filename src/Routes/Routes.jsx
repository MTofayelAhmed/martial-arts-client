import {
  createBrowserRouter,

} from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";


import AllInstructor from "../Pages/AllInstructor/AllInstructor";
import AllClasses from "../Pages/AllClasses/AllClasses";
import Dashboard from "../LayOut/Dashboard";
import MySelectedClasses from "../Pages/Dashboard/MySelectedClasses/MySelectedClasses";

import AddAClass from "../Pages/Dashboard/AddAClass/AddAClass";
import ManageClasses from "../Pages/Dashboard/ManageClasses/ManageClasses";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import MyClasses from "../Pages/Dashboard/MyClasses/MyClasses";
import StudentRoute from "./StudentRoute";
import InstructorRoute from "./InstructorRoute";
import AdminRoute from "./AdminRoute";
import Payment from "../Pages/Dashboard/Payment/Payment";


export    const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signUp',
        element: <Register></Register>
      },
     
      {
        path: 'instructors',
        element: <AllInstructor></AllInstructor>
      },
      {
        path: 'allClasses',
        element: <AllClasses></AllClasses>
      }
    ]
  },
  {
    path: "dashboard",
    element:<Dashboard></Dashboard>, 
    children: [
      {
        path: 'mySelectedClasses',
        element:<StudentRoute><MySelectedClasses></MySelectedClasses></StudentRoute>
      },
      {
        
        path:'addAClass',
        element:<InstructorRoute> <AddAClass></AddAClass></InstructorRoute>

      },
      {path: 'manageClasses',
      element:<AdminRoute><ManageClasses></ManageClasses></AdminRoute> },
      {
        path: 'manageUsers',
        element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
      },
      {
        path: 'myClasses',
        element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
      },
      {path: 'payment/:price',
      element: <Payment></Payment>
      
      }
    ]
  }
]);