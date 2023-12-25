import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaHome} from "react-icons/fa";
import { RiArchiveDrawerFill } from "react-icons/ri";

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
    
   <div>
     <div className="flex">
 
      {/* dashboard side bar */}
      <div >
               
               <div className="drawer lg:drawer-open ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label htmlFor="my-drawer-2" className="btn btn-lg  bg-sky-500 drawer-button lg:hidden">< RiArchiveDrawerFill/> </label>
      
      </div> 
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
        <ul className="menu md:w-64 min-h-screen fixed bg-cyan-900 text-base-content">
    
        <div className="p-4 mt-10 text-center">
        {user ? (
          <div className="avatar">
          <div className="w-24  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={user?.photoURL}/>
          </div>
        </div>
         
        ) : (
          <img src="https://i.ibb.co/Xb7MwCk/placeholder.jpg" />
        )}
         <h1 className="font-base text-xl text-center">
          {user ? user?.displayName : "Your Name"}
        </h1>
        </div>
          {/* Sidebar content here */}
          <ul className="menu p-4 py-auto"> 
          <li className="text-lg">
            <NavLink to="/dashboard/createnewtask">
             < MdCreateNewFolder/> Create New Task
            </NavLink>
          </li>
          <li  className="text-lg">
            <NavLink to="/dashboard/mytask">
              <FcPrevious/> My Task
            </NavLink>
          </li>
          {/* shared nav links */}
          <div className="divider"></div>
          <li  className="text-lg">
            <NavLink to="/">
              <FaHome /> Home
            </NavLink>
          </li>
          <li onClick={handleLogOut} className="mt-80 text-lg">
            {user ? (
              <div>
                <LuLogOut />
                Logout
              </div>
            ) : null}
          </li>
                    
               </ul>
        </ul>
      
      </div>
    </div>
    
                   </div>
    
      
      {/* dashboard content */}
      <div className="flex-1 p-8 md:ml-64 ">
        <Outlet />
      </div>
    </div>
   </div>
  );
};

export default Dashboard;
