import AuthContext from 'context/AuthContext';
import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';

/*
function useAuth()
{
    let isAuthenticated = false;
    let {user} = useContext(AuthContext);
    

    if (user) 
    {
        let isAuthenticated = true;    
    }
  

    return isAuthenticated;
}
*/

function PrivateRoute({children}) 
{
    let {user} = useContext(AuthContext);

    //const auth = useAuth();
    return user ? children : <Navigate to = "/" /> 
  
}


export default PrivateRoute;
