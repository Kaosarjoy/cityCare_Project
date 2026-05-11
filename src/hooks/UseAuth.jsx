import  { use } from 'react';
import { AuthContext } from '../contexts/AuthContext/AuthContext';

const UseAuth = () => {
    const authInfo = use(AuthContext)
    return authInfo;
};

export default UseAuth;