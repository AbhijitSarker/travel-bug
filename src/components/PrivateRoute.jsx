import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../proviers/AuthProvider';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)

    const location = useLocation();

    if (loading) {
        return <Spinner animation='grow' variant='danger'></Spinner>
    }

    if (user) {
        return children;
    }

    return <Navigate state={{ from: location }} to='/login' replace></Navigate>
};

export default PrivateRoute;