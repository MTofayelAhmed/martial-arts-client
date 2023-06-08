import { useEffect, useState } from "react"

const useClass = ()=> {
  const [classes, setClasses]= useState([])
  useEffect(()=> {
  fetch('http://localhost:5000/classes')
  .then(res => res.json())
  .then(data=> {
    setClasses(data)
    console.log("classes data", data)
  } )
  }, [])
  return [classes]
}

export default useClass; 