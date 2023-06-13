import { NavLink, Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";
import Footer from "../Pages/Shared/Footer/Footer";
import { FaShoppingCart, FaWallet, FaHome, FaPlusCircle, FaBorderAll, FaUserCircle, FaUserShield } from 'react-icons/fa';
import useAdmin from "../Hook/useAdmin";
import useInstructorCheck from "../Hook/useInstructorCheck";
import useStudent from "../Hook/useStudent";

const Dashboard = () => {
  // const isAdmin =  false  ;
  // const isInstructor = false;
  const [isAdmin] = useAdmin()
  const [isInstructor] = useInstructorCheck()
  const [isStudent] = useStudent()

  return (
    <div>
      <Header></Header>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {isAdmin && (
              <>
                <li>
                  <NavLink to="/"><FaHome></FaHome>Home</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageClasses"><FaUserShield></FaUserShield> Manage Classes</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageUsers"><FaUserCircle></FaUserCircle> Manage Users</NavLink>
                </li>
                
              </>
            )}

            {isInstructor && !isAdmin && (
              <>
                <li>
                  <NavLink to="/"><FaHome></FaHome>Home</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/AddAClass"><FaPlusCircle></FaPlusCircle> Add a Classes</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myClasses"><FaBorderAll></FaBorderAll> My Classes</NavLink>
                </li>
              
              </>
            )}

            {!isAdmin && !isInstructor && isStudent  &&(
              <>
                <li>
                  <NavLink to="/"><FaHome></FaHome>Home</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/mySelectedClasses"><FaShoppingCart></FaShoppingCart> My Selected Classes</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myEnrolledClasses"><FaWallet></FaWallet> My Enrolled Classes</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/paymentHistory"><FaWallet></FaWallet> My Payment History</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
