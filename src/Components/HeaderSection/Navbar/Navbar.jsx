import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useTheme } from "../../../Hooks/DarkTheme";
import Swal from "sweetalert2";
// Swal.fire({
//      title: 'Are you sure?',
//      text: "You won't be able to revert this!",
//      icon: 'warning',
//      showCancelButton: true,
//      confirmButtonColor: '#3085d6',
//      cancelButtonColor: '#d33',
//      confirmButtonText: 'Yes, delete it!'
//    }).then((result) => {
//      if (result.isConfirmed) {
//        Swal.fire(
//          'Deleted!',
//          'Your file has been deleted.',
//          'success'
//        )
//      }
//    })
const Navbar = () => {
     const { handleDark, mode } = useTheme();
     const { userSignOut, user } = useContext(AuthContext);
     const handleSignOut = () => {
          Swal.fire({
               title: "Are you sure want to signed out?",
               // text: "You won't be able to revert this!",
               icon: "warning",
               showCancelButton: true,
               confirmButtonColor: "#3085d6",
               cancelButtonColor: "#d33",
               confirmButtonText: "Yes..!",
          }).then((result) => {
               if (result.isConfirmed) {
                    userSignOut()
                         .then(() => {
                              Swal.fire(
                                   "Signed Out!",
                                   "User sign out successfully.",
                                   "success"
                              );
                              // alert("user sign out successfully");
                         })
                         .catch();
                    // Swal.fire(
                    //      "Deleted!",
                    //      "Your file has been deleted.",
                    //      "success"
                    // );
               }
          });
          // userSignOut()
          //      .then(() => {
          //           alert("user sign out successfully");
          //      })
          //      .catch();
     };
     const navLists = (
          <>
               <li>
                    <NavLink
                         to="/"
                         className={({ isActive, isPending }) =>
                              isPending
                                   ? "pending"
                                   : isActive
                                   ? "text-[#ff6900] underline"
                                   : ""
                         }
                    >
                         Home
                    </NavLink>
               </li>

               <li>
                    <NavLink
                         to="/services"
                         className={({ isActive, isPending }) =>
                              isPending
                                   ? "pending"
                                   : isActive
                                   ? "text-[#ff6900] underline"
                                   : ""
                         }
                    >
                         Services
                    </NavLink>
               </li>

               <li>
                    <NavLink
                         to="/register"
                         className={({ isActive, isPending }) =>
                              isPending
                                   ? "pending"
                                   : isActive
                                   ? "text-[#ff6900] underline"
                                   : ""
                         }
                    >
                         Register
                    </NavLink>
               </li>
               <li>
                    <NavLink
                         to="/login"
                         className={({ isActive, isPending }) =>
                              isPending
                                   ? "pending"
                                   : isActive
                                   ? "text-[#ff6900] underline"
                                   : ""
                         }
                    >
                         Login
                    </NavLink>
               </li>
               <li>
                    <NavLink
                         to="/bookings"
                         className={({ isActive, isPending }) =>
                              isPending
                                   ? "pending"
                                   : isActive
                                   ? "text-[#ff6900] underline"
                                   : ""
                         }
                    >
                        My Bookings
                    </NavLink>
               </li>
          </>
     );
     return (
          <div>
               <div>
                    <div>
                         <div className="navbar bg-base-100 dark:bg-gray-600">
                              <div className="navbar-start">
                                   <div className="dropdown">
                                        <label
                                             tabIndex={0}
                                             className="btn btn-ghost lg:hidden"
                                        >
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
                                        <ul
                                             tabIndex={0}
                                             className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                                        >
                                             {navLists}
                                        </ul>
                                   </div>

                                   <p className="btn btn-ghost text-xl md:text-2xl text-[#fcb900] font-extrabold italic">
                                        RJ AGENCY
                                   </p>
                                   <button onClick={handleDark} className="btn">
                                        {mode === "light" ? "light" : "dark"}
                                   </button>
                              </div>
                              <div className="navbar-center hidden lg:flex">
                                   <ul className="menu menu-horizontal px-1">
                                        {navLists}
                                   </ul>
                              </div>

                              <div className="navbar-end">
                                   <div className="dropdown dropdown-end">
                                        <label
                                             tabIndex={0}
                                             className="btn btn-ghost btn-circle avatar"
                                        >
                                             {user ? (
                                                  <div className="w-10 rounded-full">
                                                       <img
                                                            className="rounded-full"
                                                            src={user.photoURL}
                                                       />
                                                       <p>{user.email}</p>
                                                  </div>
                                             ) : (
                                                  <Link to="/login">
                                                       <button className="">
                                                            Sign Up
                                                       </button>
                                                  </Link>
                                             )}
                                        </label>

                                        {user && (
                                             <div>
                                                  <ul
                                                       tabIndex={0}
                                                       className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                                                  >
                                                       <div>
                                                            <li>
                                                                 <button
                                                                      onClick={
                                                                           handleSignOut
                                                                      }
                                                                      className="font-medium"
                                                                 >
                                                                      Sign Out
                                                                 </button>
                                                            </li>
                                                       </div>
                                                  </ul>
                                             </div>
                                        )}
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Navbar;
