import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hook/useAdmin";


const AdminRoute = ({children}) => {
  const location = useLocation()
  const [isAdmin, isAdminLoading] = useAdmin()
  const {user, loading}= useContext(AuthContext)
if(loading || isAdminLoading){
  return <progress className="progress progress-success w-56" value="70" max="100"></progress>
}
  if(user && isAdmin){
    return children
  }
  return <Navigate to='/'  state={{ from: location }} replace></Navigate>
};

export default AdminRoute;