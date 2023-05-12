import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivateRoutes = ({children}) => {
    const {loading, user} = useContext(AuthContext);

    if(loading){
        return <progress className="progress w-56"></progress>;
    }

    if(user.email){
        return children
    }
    
    return <Navigate to='/login' replace={true}></Navigate>
};

export default PrivateRoutes;