import { useForm } from "react-hook-form";
import { useNavigate } from "react-router"; 
import UseAuth from "../../../hooks/UseAuth";

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { registerUser } = UseAuth();
    const navigate = useNavigate(); //2. রেজিস্ট্রেশন সফল হলে হোম পেজে রিডাইরেক্ট করার জন্য useNavigate হুক ব্যবহার করা হচ্ছে

    const handleRegister = (data) => {
        registerUser(data.email, data.password)
            .then((result) => {
                const user = result.user;
                console.log("Registered user:", user);
                
                // ৩. রেজিস্ট্রেশন সফল হলে হোম পেজে রিডাইরেক্ট
                navigate("/"); 
            }).catch((error) => {
                console.log("Registration error:", error);
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-gray-900 via-purple-900 to-violet-800 p-6">
            
            <form 
                onSubmit={handleSubmit(handleRegister)} 
                className="w-full max-w-lg p-10 rounded-3xl shadow-2xl backdrop-blur-xl bg-white/10 border border-white/20 text-white"
            >
                <h2 className="text-4xl font-extrabold text-center mb-8 tracking-tight">Join Us</h2>

                <div className="space-y-5">
                    {/* First & Last Name Group */}
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1">
                            <label className="block text-sm font-medium mb-1 ml-1 text-gray-200">First Name</label>
                            <input 
                                type="text" 
                                {...register("firstName", { required: "First name is required" })} 
                                className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${errors.firstName ? 'border-red-400' : 'border-white/20'} focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all`}
                                placeholder="Enter your first name" 
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm font-medium mb-1 ml-1 text-gray-200">Last Name</label>
                            <input 
                                type="text" 
                                {...register("lastName", { required: "Last name is required" })} 
                                className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${errors.lastName ? 'border-red-400' : 'border-white/20'} focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all`}
                                placeholder="Enter your last name" 
                            />
                        </div>
                    </div>

                    {/* Email Field */}
                    <div>
                        <label className="block text-sm font-medium mb-1 ml-1 text-gray-200">Email Address</label>
                        <input 
                            type="email" 
                            {...register("email", { required: "Email is required" })} 
                            className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${errors.email ? 'border-red-400' : 'border-white/20'} focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all`}
                            placeholder="name@company.com" 
                        />
                        {errors.email && <p className="text-red-400 text-xs mt-1 italic">{errors.email.message}</p>}
                    </div>

                    {/* Image Upload */}
                    <div>
                        <label className="block text-sm font-medium mb-1 ml-1 text-gray-200">Profile Photo</label>
                        <input 
                            type="file" 
                            {...register("photo", { required: "Profile photo is required" })}
                            className="file-input file-input-bordered w-full bg-white/5 border-white/20 text-sm rounded-xl focus:outline-none" 
                        />
                        {errors.photo && <p className="text-red-400 text-xs mt-1 italic">{errors.photo.message}</p>}
                    </div>

                    {/* Password Field */}
                    <div>
                        <label className="block text-sm font-medium mb-1 ml-1 text-gray-200">Password</label>
                        <input 
                            type="password" 
                            {...register("password", { 
                                required: "Password is required", 
                                minLength: { value: 6, message: "Min 6 characters" }
                            })} 
                            className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${errors.password ? 'border-red-400' : 'border-white/20'} focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all`}
                            placeholder="••••••••" 
                        />
                        {errors.password && <p className="text-red-400 text-xs mt-1 italic">{errors.password.message}</p>}
                    </div>
                </div>

                <div className="flex items-center justify-between mt-4 px-1">
                    <label className="flex items-center text-xs cursor-pointer">
                        <input type="checkbox" className="checkbox checkbox-xs border-white/40 mr-2" />
                        Remember me
                    </label>
                    <a className="text-xs hover:underline text-purple-300">Forgot password?</a>
                </div>

                <button className="btn w-full mt-8 py-3 rounded-xl bg-gradient-to-r from-[#570df8] via-[#f000b8] to-[#37cdbe] hover:opacity-90 text-white border-none font-bold text-lg shadow-lg transform active:scale-95 transition-all duration-300">
                    Create Account
                </button>
            </form>
        </div>
    );
};

export default Register;