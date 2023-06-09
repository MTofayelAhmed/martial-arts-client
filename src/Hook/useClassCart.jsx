import { useQuery } from "@tanstack/react-query"
import { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider/AuthProvider"

const useClassCart = ()=> {
const {user}= useContext(AuthContext)
console.log('user', user.email)

  const {data:cart=[],  isLoading, refetch  } = useQuery({
    queryKey: ['carts', user?.email ],
    queryFn: async () =>{
      const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`)
      return res.json()
      
    }
   
   
  })
  return [cart, isLoading, refetch]
}

export default useClassCart;