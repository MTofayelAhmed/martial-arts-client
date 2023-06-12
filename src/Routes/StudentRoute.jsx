import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useStudent from "../Hook/useStudent";


const StudentRoute = ({children}) => {
  const location = useLocation()
  const {user, loading}= useContext(AuthContext)
  const [ isStudent, isStudentLoading]= useStudent()
if(loading || isStudentLoading){
  return <progress className="progress progress-success w-56" value="70" max="100"></progress>
}
  if(user && isStudent){
    return children
  }
  return <Navigate to='/'  state={{ from: location }} replace></Navigate>
};

export default StudentRoute;