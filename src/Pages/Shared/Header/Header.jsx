import { Link } from "react-router-dom";

const Header = () => {
  const headerOption = (
    <>
      <li>
        <Link to='/'>Home</Link>
        
      </li>
      <li>
      <Link to='/'>Instructors</Link>
      </li>
      <li>
      <Link to='/'>Classes</Link>
      </li>
      <li>
      <Link to='/'>DashBoard</Link>
      </li>
      <li>
   <Link to='/'>  <button>Login</button></Link>
      </li>
      <li>
   <Link to='/'>  <button>LogOut</button></Link>
   
      </li>

    </>
  );
  return (
    <div className="navbar fixed z-10 bg-opacity-30 font-serif   text-white h-28">
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
