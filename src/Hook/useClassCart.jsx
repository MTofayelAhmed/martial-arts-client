import { useQuery } from "@tanstack/react-query"
import { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider/AuthProvider"
import useAxiosSecure from "./useAxiosSecure"

const useClassCart = ()=> {
const {user}= useContext(AuthContext)
console.log('user', user.email)

const [axiosSecure] = useAxiosSecure()
  const {data:cart=[],  isLoading, refetch  } = useQuery({
    queryKey: ['carts', user?.email ],
    // queryFn: async () =>{
    //   const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`, {
    //     headers:{
    //       authorization: `bearer ${token}`
    //     }
    queryFn: async () =>{
      const res = await axiosSecure.get(`/carts?email=${user?.email}`)
      console.log('res from axios', res)
      return res.data
      
    }
   
   
  })
  return [cart, isLoading, refetch]
}

export default useClassCart;