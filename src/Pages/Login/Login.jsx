import { useContext } from "react";
import SectionTile from "../../Components/SectionTile";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import SocialLogin from "../Shared/SocialLogin/SocialLogin";
const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
 const from =  location.state?.from?.pathname || "/";

  const { login } = useContext(AuthContext);
  

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    login(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "You logged in Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
       
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="my-14">
      <SectionTile heading="please Login"></SectionTile>
      <div className="hero mix-h-screen mt-14 ">
        <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl ">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text ">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>

            <div className="form-control mt-6">
              <input
                className=" h-10 cursor-pointer  bg-gray-900 text-white"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <p className="text-center pb-3 text-gray-900">
            <small>
              New Here ? <Link to="/signUp"> Create a New Account</Link>{" "}
            </small>
          </p>
       <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
