import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
     const {user, createUser, updateUser } = useContext(AuthContext);
     const handleRegister = (e) => {
          // if(user){
          //     return alert('already login');
          // }
          e.preventDefault();
          const form = e.target;
          const name = form.name.value;
          const email = form.email.value;
          const password = form.password.value;
          console.log(email, password, name);
          createUser(email, password)
               .then((result) => {
                    Swal.fire(
                         "Good job!",
                         "User created successfully",
                         "success"
                    );
                    updateUser(name)
                         .then(() => {
                              console.log(name);
                         })
                         .catch((error) => {
                              console.log(error);
                         });

                    console.log(result.user);
               })
               .catch((error) => {
                    // console.log(error);
               });
     };
     return (
          <div>
               <div>
                    <div className="hero min-h-screen bg-base-200">
                         <div className="hero-content flex-col lg:flex-row">
                              {/* <div className="text-center lg:text-left w-1/2">
                              <img src={img} alt="" />
                         </div> */}
                              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                   <h1 className="text-3xl mt-3 text-center font-bold">
                                        Sign Up here!
                                   </h1>
                                   <div className="card-body">
                                        <form onSubmit={handleRegister}>
                                             <div className="form-control">
                                                  <label className="label">
                                                       <span className="label-text">
                                                            Email
                                                       </span>
                                                  </label>
                                                  <input
                                                       type="text"
                                                       name="name"
                                                       placeholder="name"
                                                       className="input input-bordered"
                                                       required
                                                  />
                                             </div>
                                             <div className="form-control">
                                                  <label className="label">
                                                       <span className="label-text">
                                                            Email
                                                       </span>
                                                  </label>
                                                  <input
                                                       type="email"
                                                       name="email"
                                                       placeholder="email"
                                                       className="input input-bordered"
                                                       required
                                                  />
                                             </div>
                                             <div className="form-control">
                                                  <label className="label">
                                                       <span className="label-text">
                                                            Password
                                                       </span>
                                                  </label>
                                                  <input
                                                       type="password"
                                                       name="password"
                                                       placeholder="password"
                                                       className="input input-bordered"
                                                       required
                                                  />
                                                  <label className="label">
                                                       <a
                                                            href="#"
                                                            className="label-text-alt link link-hover"
                                                       >
                                                            Forgot password?
                                                       </a>
                                                  </label>
                                             </div>
                                             <div className="form-control mt-6">
                                                  <input
                                                       type="submit"
                                                       className="btn btn-primary"
                                                       value="Sign Up"
                                                  />
                                             </div>
                                        </form>
                                        <p>
                                             Already have an account?
                                             <Link
                                                  to={"/login"}
                                                  className="text-red-600 font-bold ml-2 hover:underline"
                                             >
                                                  Sign In Here
                                             </Link>
                                        </p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Register;
