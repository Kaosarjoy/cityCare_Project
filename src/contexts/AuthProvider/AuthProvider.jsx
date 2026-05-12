import {  signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from "firebase/auth";
import { AuthContext } from '../AuthContext/AuthContext';
import { auth } from '../../firebase/firebase.init';


const AuthProvider = ({children}) => {
    //google provider 
   const googleProvider = new GoogleAuthProvider()

   //register
    const registerUser = (email,password)=>{
     return  createUserWithEmailAndPassword(auth, email, password)
    }
    //login user 
    const signInUser =( email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    //login with google
    const googleSignIn =()=>{
        return signInWithPopup(auth, googleProvider)
    }

    //reset password
    const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
};

    const authInfo = {
        registerUser,
        signInUser,
        googleSignIn,
        resetPassword
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;