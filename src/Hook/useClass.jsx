import { useQuery } from "@tanstack/react-query"
// import { useEffect, useState } from "react"

const useClass = ()=> {
  // const [classes, setClasses]= useState([])
  // useEffect(()=> {
  // fetch('http://localhost:5000/classes')
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
      const res = await fetch("http://localhost:5000/classes")
      return res.json()
      
    }
   
   
  })
  return [classes, isLoading, refetch]


}

export default useClass; 