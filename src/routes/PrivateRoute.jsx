import React from 'react'; import { Navigate } from 'react-router-dom';
const PrivateRoute = ({ children }) => {
  const isAuth = true; // remplace par une vraie auth plus tard
  return isAuth ? children : <Navigate to='/login' />;
};
export default PrivateRoute;