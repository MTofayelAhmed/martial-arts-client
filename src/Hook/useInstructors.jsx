import { useEffect, useState } from "react"

const useInstructors= ()=> {
  const [instructors, setInstructors]= useState([])
  useEffect(()=>{
    fetch('https://summer-camp-server-nu.vercel.app/instructors')
    .then(res=> res.json())
    .then(data => {
      console.log('instructors data', data)
      setInstructors(data)
    })
  },[])

  return [instructors]
}
export default  useInstructors