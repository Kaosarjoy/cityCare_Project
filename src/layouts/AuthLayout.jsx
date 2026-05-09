import { Outlet } from 'react-router';
import Navbar from '../pages/Shared/navbar/Navbar'
import Footer from '../pages/Shared/footer/Footer'
const AuthLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
          <Navbar></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>

        </div>
    );
};

export default AuthLayout;
//61-1 7 min 