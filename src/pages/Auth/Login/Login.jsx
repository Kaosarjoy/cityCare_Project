import { useForm } from "react-hook-form";
import UseAuth from "../../../hooks/UseAuth";
import { useNavigate, Link } from "react-router"; 

const Login = () => {
    // হুকগুলো অবশ্যই কম্পোনেন্টের ভেতরে থাকতে হবে
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signInUser, googleSignIn } = UseAuth(); 
    const navigate = useNavigate();

    const handleLogin = (data) => {
        signInUser(data.email, data.password)
            .then((result) => {
                console.log("Logged in user:", result.user);
                navigate("/");
            })
            .catch((error) => console.log("Login error:", error));
    };

    const handleGoogleLogin = () => {
        googleSignIn()
            .then((result) => {
                console.log("Google login success:", result.user);
                navigate("/");
            })
            .catch((error) => console.log(error));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-gray-900 via-purple-900 to-violet-800 p-6">
            <div className="w-full max-w-lg p-10 rounded-3xl shadow-2xl backdrop-blur-xl bg-white/10 border border-white/20 text-white text-center">
                
                <h2 className="text-4xl font-extrabold mb-8 tracking-tight text-center">Welcome Back</h2>

                <form onSubmit={handleSubmit(handleLogin)} className="space-y-5 text-left">
                    {/* Email Field */}
                    <div>
                        <label className="block text-sm font-medium mb-1 ml-1 text-gray-200">Email Address</label>
                        <input
                            type="email"
                            {...register("email", { required: "Email is required" })}
                            className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${errors.email ? "border-red-400" : "border-white/20"} focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all`}
                            placeholder="name@company.com"
                        />
                        {errors.email && <p className="text-red-400 text-xs mt-1 italic">{errors.email.message}</p>}
                    </div>

                    {/* Password Field */}
                    <div>
                        <label className="block text-sm font-medium mb-1 ml-1 text-gray-200">Password</label>
                        <input
                            type="password"
                            {...register("password", { required: "Password is required" })}
                            className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${errors.password ? "border-red-400" : "border-white/20"} focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all`}
                            placeholder="••••••••"
                        />
                        {errors.password && <p className="text-red-400 text-xs mt-1 italic">{errors.password.message}</p>}
                    </div>

                    <div className="flex items-center justify-between mt-2 px-1">
                        <label className="flex items-center text-xs cursor-pointer">
                            <input type="checkbox" className="checkbox checkbox-xs border-white/40 mr-2" />
                            Remember me
                        </label>
                       <Link to='/forget-password' className="text-xs hover:underline text-purple-300">Forgot password?</Link>
                    </div>

                    <button className="btn w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-[#570df8] via-[#f000b8] to-[#37cdbe] hover:opacity-90 text-white border-none font-bold text-lg shadow-lg transform active:scale-95 transition-all duration-300">
                        Login
                    </button>
                </form>

                {/* Divider */}
                <div className="divider before:bg-white/20 after:bg-white/20 my-6 text-sm text-gray-400 font-light">OR</div>

                {/* Google Button */}
                <button 
                    onClick={handleGoogleLogin}
                    className="btn w-full bg-white text-black hover:bg-gray-100 border-none font-semibold rounded-xl flex items-center justify-center gap-3"
                >
                    <svg width="20" height="20" viewBox="0 0 512 512">
                        <path fill="#fbbc02" d="M120 256c0-30.9 5.9-60.5 16.7-87.7L37 72.3C13.5 119.2 0 171.7 0 227.2c0 55.5 13.5 108 37 154.9l99.7-76.1c-10.8-27.2-16.7-56.8-16.7-87.7z" />
                        <path fill="#ea4335" d="M500.2 211.9c1.4-12 2.3-24.1 2.3-36.4c0-7-.5-13.9-1.4-20.7H256v91.1h140.7c-6.1 32.7-24.4 60.4-50.5 78.5l94.3 72.1c55.1-50.9 86.7-126.1 86.7-201.6z" />
                        <path fill="#34a853" d="M256 512c69.2 0 127.3-22.9 169.8-62.2l-94.3-72.1c-22.1 14.8-50.4 23.6-75.5 23.6c-68.8 0-127.3-46.5-148.2-108.9l-99.7 76.1C51.1 442.9 144.9 512 256 512z" />
                        <path fill="#4285f4" d="M256 94.5c37.5 0 71.1 12.9 97.6 34.1L423.4 59c-42.5-39.6-100.6-62.2-167.4-62.2c-111.1 0-204.9 69.1-245.3 167l99.7 76.1C130.7 141 189.2 94.5 256 94.5z" />
                    </svg>
                    Continue with Google
                </button>

                {/* Register Link */}
                <p className="mt-8 text-sm text-gray-300">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-white font-bold hover:underline decoration-purple-400">
                        Register here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;