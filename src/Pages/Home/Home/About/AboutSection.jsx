import SectionTile from "../../../../Components/SectionTile";
import image1 from "../../../../assets/portrait-professional-sportsman-training-practising-karate-isolated-black-studio-background (1).jpg";
import image2 from "../../../../assets/pexels-pixabay-163403.jpg";

const AboutSection = () => {
  return (
    <div className=" lg:mx-20  mb-20">
      <SectionTile
        heading="Track our record"
        subHeading="summer camp"
      ></SectionTile>
      <div className=" flex  gap-10 mt-10 ">
        <div className=" w-2/5 flex gap-5">
          <div>
            <img  src={image1} alt="" />
          </div>
          <div className=" mt-36">
            <img  src={image2} alt="" />
          </div>
        </div>
        <div className=" w-3/5 m-10  ">
          <h2>
            <span className="text-4xl font-bold uppercase  text-gray-700">
              WE Have been doing this <br />
              since
            </span>

            <span className=" ml-5 text-blue-800 font-extrabold text-4xl">
              1999
            </span>
          </h2>
          <p className=" mt-5  text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quo
            harum officia dignissimos pariatur asperiores amet eveniet quasi
            illo necessitatibus voluptatibus, architecto natus minima, ad
            ratione, commodi consequatur totam voluptatum dolor aspernatur
            accusamus consectetur repudiandae. Officiis porro eveniet hic ipsa!
          </p>
          <div className=" flex items-center justify-between mt-6 mr-72 ">
            <div>
              <p className=" font-mono text-2xl font-bold">2280+</p>
              <p className=" text-blue-600 font-semibold">Clients</p>
            </div>
            <div>
              <p className=" font-mono text-2xl font-bold">280+</p>
              <p className=" text-blue-600 font-semibold">Employee </p>
            </div>
            <div>
              <p className=" font-mono text-2xl font-bold">180+</p>
              <p className=" text-blue-600 font-semibold">Projects</p>
            </div>
           
          </div>
          <button className=" bg-blue-600  text-white p-2 m-2 rounded mt-5 "> Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
