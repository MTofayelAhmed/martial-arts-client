import { Link } from "react-router-dom";
import errorImage from "../../assets/8030430_3828537.jpg"

const Error = () => {
  return(
    <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-gray-50 sm:px-6 lg:px-8">
    <div className="max-w-md w-full">
      <div>
        <h2 className="text-3xl font-extrabold text-gray-900">
          Oops! Something went wrong...
        </h2>
        <img src={errorImage} alt="" />
       
      </div>
      <div className="mt-4 ml-20">
        < Link to='/'
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-900 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        
        >
        Back To HomePage
        </Link>
      </div>
    </div>
  </div>
  );
};

export default Error;