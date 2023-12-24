import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const{user,logOut}=useContext(AuthContext)
      const handleLogOut=()=>{
      logOut()
      .then(()=>{})
      .catch(error=>console.log(error))
  }


    const navOptions = (
        <>
          <li className="font-bold font-serif text-lg text-rose-600"><Link to="/">Home</Link></li>
   
          {
        user ? (
          <>
           <li className="font-bold font-serif text-lg text-rose-600"><Link to="/dashboard">Dashboard</Link></li>
           <button onClick={handleLogOut} className="font-bold font-serif text-lg text-rose-600">LogOut</button>
           </>
         
        ) : (
          <li className="font-bold font-serif text-lg text-rose-600"><Link to="/login">Login</Link></li>
        )
      }
        </>
      );
    return (
        <div  className="navbar justify-between  h-10 mb-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {navOptions}
          </ul>
        </div>
        <div className="flex items-center">
          <a className="btn btn-ghost normal-case text-xl">TaskPro</a>
          <img className="h-10 w-10" src="https://i.ibb.co/9tCKZbS/icons8-checklist-96.png" alt="" />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navOptions}
        </ul>
      </div>
      <div className="navbar-end">
  <div className="dropdown dropdown-left  items-center md:order-2   rtl:space-x-reverse">
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full">
     
          <img src="https://i.ibb.co/Xb7MwCk/placeholder.jpg" />
       
      </div>
    </label>
    <ul
      tabIndex={0}
      className="mt-3 z-[1] text-start shadow  dropdown-content space-y-1 bg-base-100 rounded-box w-48"
    >
      <Link>
        <li ><button  className=" mt-5 flex mx-auto bg-transparent hover:bg-red-600 text-red-600 font-serif font-semibold hover:text-white py-1 md:py-2 px-2 md:px-4 border  hover:border-transparent rounded"> Dashboard</button></li>
      </Link>
      <li>
        <h1  className="font-base text-base">
            user name 
        </h1>
      </li>
    
        <li  className="font-base text-base">
          <Link to="/login" >Login</Link>
        </li>
    </ul>
  </div>
</div>

    </div>
    );
};

export default Navbar;