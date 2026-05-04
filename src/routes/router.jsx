import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import Contact from "../pages/Home/Contact/Contact";

export const router = createBrowserRouter([
   {
    path: "/",
    Component:RootLayout,
    children:[
        {
            index:true,
            Component:Home
        },{
            path:'contact',
            Component:Contact
        }

    ]
   }
])