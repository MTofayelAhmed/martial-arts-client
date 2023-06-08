import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const handleLogOut = () => {
    logout()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };

  const headerOption = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/instructors">Instructors</Link>
      </li>
      <li>
        <Link to="/allClasses">Classes</Link>
      </li>
      <li>
        <Link to="/">DashBoard</Link>
      </li>
     
      {user ? (
        <>
          <li>
            <div >
              <img className="w-12 rounded-full -mt-3" src={user?.photoURL} />
            </div>
          </li>
          <li>
            <Link>
              <button onClick={handleLogOut}>LogOut</button>
            </Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">
              <button>Login</button>
            </Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-gray-900 font-serif   text-white h-28">
      <div className="navbar-start">
        <div className="dropdown">
          <label className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul className="menu menu-sm dropdown-content mt-3 p-2 shadow  rounded-box w-52">
            {headerOption}
          </ul>
        </div>
        <a className="font-bold text-xl cursor-pointer pl-10">
          ALL STAR MARTIAL ARTS
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{headerOption}</ul>
      </div>
    </div>
  );
};

export default Header;
