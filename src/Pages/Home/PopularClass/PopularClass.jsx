import { useEffect, useState } from "react";
import SectionTile from "../../../Components/SectionTile";
import ClassCard from "../Home/ClassCard/ClassCard";


const PopularClass = () => {
  const [classes, setClasses]= useState([])
useEffect(()=> {
fetch('http://localhost:5000/classes')
.then(res => res.json())
.then(data=> {
  setClasses(data)
  console.log("classes data", data)
} )
}, [])



  return (
    <div className="mx-20 my-20">
      <SectionTile heading='popular Classes'></SectionTile>
      <div className="grid md:grid-cols-3 gap-10 my-20 ">
{
  classes.slice(0, 6).map((popularClass) => <ClassCard key ={popularClass._id} popularClass= {popularClass}></ClassCard>)
}

     
    </div>
    </div>
  )
}


export default PopularClass;