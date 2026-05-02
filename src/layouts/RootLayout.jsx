import { Outlet } from "react-router";
import Navbar from "../pages/Shared/navbar/Navbar";
import Footer from "../pages/Shared/footer/Footer";


const RootLayout = () => {
    return (
        <div className=" max-w-7xl mx-auto rounded-2xl mt-4">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default RootLayout;