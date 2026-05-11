import { useForm } from "react-hook-form";
import UseAuth from "../../../hooks/UseAuth";


const Register = () => {
    const {register,  handleSubmit, formState: { errors },} = useForm();
    const {registerUser}=UseAuth();
    const handleRegister = (data)=>{
       // console.log("use data", data);
       registerUser(data.email, data.password)
       .then((result)=>{
        const user = result.user;
        console.log("registered user", user);
       }).catch((error)=>{
        console.log("registration error", error);
       })
    }

    return (
        <div>
            <form onSubmit={handleSubmit(handleRegister)} className="w-full max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg">
                 <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" {...register("email",{required:true})} className="input" placeholder="Email" />
          {errors.email?.type==="required" && <p className="text-red-500">Email is required</p>}
          {errors.email?.type==="pattern" && <p className="text-red-500">Please enter a valid email</p>}

            <label className="label">Image file</label>
        <input type="file" className="file-input file-input-info" />
          <label className="label">Password</label>
          <input type="password" {...register("password", {required:true,pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/})} className="input" placeholder="Password" />
          {errors.password?.type==="required" && <p className="text-red-500">Password is required</p>}
          {errors.password?.type==="pattern" && <p className="text-red-500">Password must be at least 6 characters long and include an uppercase letter, a lowercase letter, a number, and a special character</p>}
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
            </form>
        </div>
    );
};

export default Register;