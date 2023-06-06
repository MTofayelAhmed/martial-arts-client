import SectionTile from "../../../Components/SectionTile";
import ClassCard from "../Home/ClassCard/ClassCard";


const PopularClass = () => {
  return (
    <div>
      <SectionTile heading='popular Classes'></SectionTile>
      <div className="grid md:grid-cols-3 gap-5">
      <ClassCard></ClassCard>
    </div>
    </div>
  );
};

export default PopularClass;