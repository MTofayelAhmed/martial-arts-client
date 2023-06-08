

const SectionTile = ({heading, subHeading}) => {
  return (
    <div>
      <h2 className="text-lg  text-center uppercase font-serif text-black ">{subHeading}</h2>
      <div className="divider  w-48 mx-auto -mt-2"></div>
      <h2 className="text-2xl font-bold text-center  uppercase font-serif text-black ">{heading}</h2>
    </div>
  );
};

export default SectionTile;