import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import AllProduct from "../Pages/AllProduct";


export const router = createBrowserRouter([
    {
    path: "/",
      element: <Main/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
          path:'/all',
          element:<AllProduct/>
      }
      ]

    }
])