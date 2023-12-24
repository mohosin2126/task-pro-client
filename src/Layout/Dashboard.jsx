import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaHome} from "react-icons/fa";

import { LuLogOut } from "react-icons/lu";
import { MdCreateNewFolder } from "react-icons/md";
import { FcPrevious } from "react-icons/fc";


const Dashboard = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="w-64 mt-20 min-h-screen">
        <ul className="menu p-4">
          <li>
            <NavLink to="/dashboard/createnewtask">
             < MdCreateNewFolder/> Create New Task
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/previoustask">
              <FcPrevious/> Previous Task
            </NavLink>
          </li>
          {/* shared nav links */}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome /> Home
            </NavLink>
          </li>
          <li onClick={handleLogOut} className="mt-80">
            {user ? (
              <div>
                <LuLogOut />
                Logout
              </div>
            ) : null}
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
