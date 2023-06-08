
import SectionTile from "../../../Components/SectionTile";
import useClass from "../../../Hook/useClass";
import ClassCard from "../Home/ClassCard/ClassCard";


const PopularClass = () => {
const [classes] = useClass()



  return (
    <div className="mx-20 my-20">
      <SectionTile heading='popular Classes' subHeading='summer camp'></SectionTile>
      <div className="grid md:grid-cols-3 gap-10 my-20 ">
{
  classes.slice(0, 6).map((popularClass) => <ClassCard key ={popularClass._id} popularClass= {popularClass}></ClassCard>)
}

     
    </div>
    </div>
  )
}


export default PopularClass;