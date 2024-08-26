/* eslint-disable react/prop-types */
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const authToken = localStorage.getItem('authToken');

    if (!authToken) {
        // Jika tidak ada authToken, redirect ke halaman login
        return <Navigate to="/login" replace />;
    }

    // Jika sudah login, render komponen yang diminta
    return children;
};

export default ProtectedRoute;
