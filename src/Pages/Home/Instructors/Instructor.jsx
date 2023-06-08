
import InstructorCard from "../Home/InstructorCard/InstructorCard";
import SectionTile from "../../../Components/SectionTile";
import useInstructors from "../../../Hook/useInstructors";


const Instructor = () => {

const [instructors] = useInstructors()



  return (
 <div >
  <SectionTile heading="top Instructors" subHeading='summer camp'></SectionTile>
     <div className="grid grid-cols-3 mx-20 gap-5 mt-20">
    {
      instructors.map(instructor=> <InstructorCard key= {instructor._id} instructor= {instructor}></InstructorCard> )

    }

    
    </div>
 </div>
  );
};

export default Instructor;

