import React, { useContext } from "react";
import img from "../../assets/images/login/login.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";
const Login = () => {
     const { signIn } = useContext(AuthContext);
     const location = useLocation();
     const navigate = useNavigate();
     const handleLogin = (e) => {
          e.preventDefault();
          const form = e.target;
          const email = form.email.value;
          const password = form.password.value;
          console.log(email, password);
          signIn(email, password)
               .then((result) => {
                    const user = {email}
                    axios.post('http://localhost:5000/jwt',user,{withCredentials:true})
                    .then(res=>{
                         console.log(res.data);
                         if(res.data.success){ 
                              navigate(location?.state ? location.state : '/');
                         }
                    })
                    Swal.fire(
                         'Good job!',
                         'login successful',
                         'success'
                       )
                    console.log(result.user);
               })
               .catch((error) => {
                    console.log(error.message);
               });
     };
     return (
          <div>
               <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                         <div className="text-center lg:text-left w-1/2">
                              <img src={img} alt="" />
                         </div>
                         <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                              <h1 className="text-5xl text-center font-bold">
                                   Login!
                              </h1>
                              <div className="card-body">
                                   <form onSubmit={handleLogin}>
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
                                                  value="Login"
                                             />
                                        </div>
                                   </form>
                                   <p>
                                        Don't have an account?
                                        <Link
                                             to={"/register"}
                                             className="text-red-600 dark:text-black font-bold ml-2 hover:underline"
                                        >
                                             Sign Up Here
                                        </Link>
                                   </p>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Login;
