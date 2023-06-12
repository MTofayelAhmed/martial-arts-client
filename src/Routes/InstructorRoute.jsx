import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useInstructorCheck from "../Hook/useInstructorCheck";

const InstructorRoute = ({children}) => {
  const location = useLocation()
  const [ isInstructor, isInstructorLoading]= useInstructorCheck()
  const {user, loading}= useContext(AuthContext)
if(loading || isInstructorLoading){
  return <progress className="progress progress-success w-56" value="70" max="100"></progress>
}
  if(user && isInstructor){
    return children
  }
  return <Navigate to='/'  state={{ from: location }} replace></Navigate>
};

export default InstructorRoute;


