import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";





const SocialLogin = () => {
  const {googleSignIn}= useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation();
  const from =  location.state?.from?.pathname || "/";
  const handleClick = () => {
    googleSignIn()
      .then((result) => {
        const googleUser = result.user;
        const savedUser= {email: googleUser.email, name: googleUser.displayName}
        fetch("http://localhost:5000/users",{
              method: "POST",
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(savedUser)
            })
            .then(res=> res.json())
            .then(()=> {
              navigate(from, { replace: true });
            })

        
         
        console.log("google Register", googleUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };




  return (
    <button
    onClick={handleClick}
    className="btn btn-circle btn-outline mx-auto mb-3"
  >
    <FaGoogle></FaGoogle>
  </button>
  );
};

export default SocialLogin;