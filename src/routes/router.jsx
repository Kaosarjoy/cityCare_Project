import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../Coverage/Coverage";


export const router = createBrowserRouter([
   {
    path: "/",
    Component:RootLayout,
    children:[
        {
            index:true,
            Component:Home
        },
        {
            path:'/coverage',
            Component:Coverage,
            loader:()=>fetch('/serviceLocation.json').then(res=>res.json())
        }

    ]
   }
])