import { useQuery } from "@tanstack/react-query"
// import { useEffect, useState } from "react"

const useClass = ()=> {
  // const [classes, setClasses]= useState([])
  // useEffect(()=> {
  // fetch('https://summer-camp-server-mtofayelahmed.vercel.app/classes')
  // .then(res => res.json())
  // .then(data=> {
  //   setClasses(data)
  //   console.log("classes data", data)
  // } )
  // }, [])
  // return [classes]


  const {data: classes=[],  isLoading, refetch  } = useQuery({
    queryKey: ['classes'],
    queryFn: async () =>{
      const res = await fetch("https://summer-camp-server-mtofayelahmed.vercel.app/classes")
      return res.json()
      
    }
   
   
  })
  return [classes, isLoading, refetch]


}

export default useClass; 