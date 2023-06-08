import SectionTile from "../../Components/SectionTile";
import useClass from "../../Hook/useClass";
import AllClassesCard from "../AllClassesCard/AllClassesCard";


const AllClasses = () => {
const [classes] = useClass()


  return (
   <div className="my-14">
    <SectionTile subHeading="summer camp" heading='all Class'></SectionTile>
     <div className="grid grid-cols-2 gap-5 mx-32 my-14">
     {
      classes.map(course=> <AllClassesCard key={course._id} course= {course}></AllClassesCard>)
     }
    </div>
   </div>
  );
};

export default AllClasses;