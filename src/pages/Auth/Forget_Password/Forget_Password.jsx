import { useForm } from "react-hook-form";
import UseAuth from "../../../hooks/UseAuth";
import { useNavigate } from "react-router";
import { toast } from "react-hot-toast"; // অথবা আপনি অন্য কোনো নোটিফিকেশন লাইব্রেরি ব্যবহার করতে পারেন

const Forget_Password = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { resetPassword } = UseAuth(); 
    const navigate = useNavigate();

    const handleReset = (data) => {
        const email = data.email;

        resetPassword(email)
            .then(() => {
                // ইউজারকে জানানো যে ইমেইল পাঠানো হয়েছে
                alert("Password reset email sent! Please check your inbox or spam folder.");
                
                // ইচ্ছা করলে সরাসরি Gmail ওপেন করার অপশন দেওয়া যায় (নিচের লাইনটি অপশনাল)
                // window.location.href = "https://mail.google.com/"; 

                // সফল হলে লগইন পেজে পাঠিয়ে দিন
                navigate("/login");
            })
            .catch((error) => {
                console.error("Error sending reset email:", error.message);
                alert("Failed to send reset email. Please make sure the email is correct.");
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-gray-900 via-purple-900 to-violet-800 p-6">
            <div className="w-full max-w-md p-10 rounded-3xl shadow-2xl backdrop-blur-xl bg-white/10 border border-white/20 text-white">
                <h2 className="text-3xl font-bold text-center mb-4 tracking-tight">Forgot Password?</h2>
                <p className="text-sm text-gray-300 text-center mb-8">
                    Enter your email address and we will send you a link to reset your password.
                </p>

                <form onSubmit={handleSubmit(handleReset)} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium mb-1 ml-1 text-gray-200">Email Address</label>
                        <input
                            type="email"
                            {...register("email", { 
                                required: "Email is required",
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Please enter a valid email"
                                }
                            })}
                            className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${errors.email ? "border-red-400" : "border-white/20"} focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all`}
                            placeholder="Enter your registered email"
                        />
                        {errors.email && (
                            <p className="text-red-400 text-xs mt-1 italic">{errors.email.message}</p>
                        )}
                    </div>

                    <button className="btn w-full py-3 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#a855f7] hover:from-[#4f46e5] hover:to-[#9333ea] text-white border-none font-bold text-lg shadow-lg transform active:scale-95 transition-all">
                        Send Reset Link
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <button 
                        onClick={() => navigate("/login")}
                        className="text-sm text-gray-300 hover:text-white hover:underline transition-all"
                    >
                        Back to Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Forget_Password;