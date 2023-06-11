import { useContext } from "react";

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";


const useInstructorCheck = ()=> {
const {user} = useContext(AuthContext)
const [axiosSecure]= useAxiosSecure()

const {data: isInstructor, isLoading: isInstructorLoading}= useQuery({
  queryKey: ['isInstructor', user?.email],
  queryFn: async () => {
    const res = await axiosSecure.get(`/users/instructor/${user?.email}`)
    console.log('isAdmin response', res)
    return res.data.instructor

  }
})
return [ isInstructor, isInstructorLoading]
}


export default useInstructorCheck; 