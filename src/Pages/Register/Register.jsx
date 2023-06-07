import { useForm } from "react-hook-form";
import { FaGoogle } from 'react-icons/fa';
import SectionTile from "../../Components/SectionTile";
import { Link } from "react-router-dom";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, updatedUserProfile, googleSignIn } = useContext(AuthContext);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const handleClick = ()=> {
    googleSignIn()
    .then(result => {
      const googleUser= result.user;
     
      console.log("google Register", googleUser)
    })
    .catch(error=> {
      console.log(error.message)
    })
  }

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const userCreated = result.user;
        console.log(userCreated);
        updatedUserProfile(data.name, data.photoURL)
          .then(() => {})
          .catch((error) => {
            console.log(error);
          });

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "you are successfully registered",
          showConfirmButton: false,
          timer: 1500,
        });
      })

      .catch((error) => {
        console.log(error);
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <div className="my-14">
      <SectionTile heading="please Register"></SectionTile>
      <div className="hero mix-h-screen mt-14 ">
        <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl ">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text ">Name</span>
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className=" text-red-900 text-center pt-2">
                  This field is required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text ">Photo URL</span>
              </label>
              <input
                type="text"
                {...register("photoURL")}
                placeholder="Photo URL"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text ">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.password?.type === "required" && (
                <p className=" text-red-900 text-center pt-2">
                  email is required
                </p>
              )}
            </div>

            <div className="form-control pr-10">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password?.type === "required" && (
                <p className=" text-red-900 text-center pt-2">
                  Password is required
                </p>
              )}
              {errors.password?.type === "minLength" && (
                <p className=" text-red-900 text-center pt-2">
                  minimum 6 character is required
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className=" text-red-900 text-center pt-2">
                  password must have one uppercase, one lowercase, one special
                  character, one number
                </p>
              )}
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute ml-[440px] mt-14 text-gray-500 focus:outline-none"
              >
                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                {...register(" confirm password")}
                name="password"
                type="password"
                placeholder=" Confirm password"
                className="input input-bordered"
              />
            </div>

            <div className="form-control mt-6">
              <input
                className=" h-10 cursor-pointer  bg-gray-900 text-white"
                type="submit"
                value="Register"
              />
            </div>
          </form>
          <p className="text-center pb-3 text-gray-900">
            <small>
              Already have an Account ? <Link to="/login"> please Login</Link>{" "}
            </small>
          </p>
          <button onClick={handleClick} className="btn btn-circle btn-outline mx-auto mb-3">
           <FaGoogle></FaGoogle>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
