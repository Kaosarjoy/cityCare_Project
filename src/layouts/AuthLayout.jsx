import logoImg from '../assets/logo.png'

const AuthLayout = () => {
    return (
        <div>
            <img src={logoImg} alt="Logo" className='h-[150px] w-[140px]' />
            <h2>Welcome to Our App</h2>
            <p>Please log in to continue</p>
            {/* Add your login form or authentication components here */}
        </div>
    );
};

export default AuthLayout;
//61-1 7 min 