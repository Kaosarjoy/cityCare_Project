import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../Coverage/Coverage";
import AuthLayout from "../layouts/AuthLayout";
import Login from '../pages/Auth/Login/Login';
import Register from '../pages/Auth/Register/Register';
import Forget_Password from "../pages/Auth/Forget_Password/Forget_Password";
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
   },{
    path:"/",
    Component:AuthLayout,
    children:[
        {
            path:'login',
            Component:Login
        },
        {
            path:'register',
            Component:Register
        },
        {
            path:'forget-password',
            Component:Forget_Password
        }
    ]
   }
])
//react hook form use kor a register and login page er form validation korce .