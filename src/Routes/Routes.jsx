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
import PrivateRoute from "./PrivateRoute";


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
    element: <Dashboard></Dashboard>, 
    children: [
      {
        path: 'mySelectedClasses',
        element: <PrivateRoute><MySelectedClasses></MySelectedClasses></PrivateRoute>
      }
    ]
  }
]);