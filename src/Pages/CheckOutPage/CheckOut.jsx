import React, { useContext } from "react";
import CheckOutBanner from "../SharedPages/CheckOutBanner";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import moment from "moment";
// import moment from "moment";

const CheckOut = () => {
     const { user } = useContext(AuthContext);
     const service = useLoaderData();
     // console.log(service);
     const { _id, price, title, img } = service;

     const handleOrder = (e) => {
          e.preventDefault();
          const form = e.target;
          // console.log(form);
          const name = form.name.value;
          const email = user?.email;
          console.log(email, name);
          const date = form.date.value;
          // console.log(form.date);
          const orderInfo = {
               serviceID: _id,
               service: title,
               CustomerName: name,
               email,
               date,
               price,
               img,
          };
          console.log(orderInfo);
          fetch("http://localhost:5000/bookings", {
               method: "POST",
               headers: {
                    "content-type": "application/json",
               },
               body: JSON.stringify(orderInfo),
          })
               .then((res) => res.json())
               .then((data) => {
                    console.log(data);
                    if (data.acknowledged)
                     {
                         Swal.fire("Good job!", "order confirmed", "success");
                    }
               });
     };
     return (
          <div>
               <CheckOutBanner></CheckOutBanner>
               {/* <p>{moment().format('MMMM Do YYYY, h:mm:ss a')}</p> */}
               <div className="dark:text-white bg-[#F3F3F3] container mx-auto my-10 border">
                    {/* <p>{description}</p> */}
                    {/* <p>{title}</p> */}
                    {/* <div className="hero min-h-screen bg-base-200"> */}
                    {/* <div className="hero-content flex-col lg:flex-row-reverse"> */}
                    {/* <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"> */}
                    <form onSubmit={handleOrder}>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-10">
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text dark:text-white">
                                             Name
                                        </span>
                                   </label>
                                   <input
                                        type="text"
                                        placeholder="name"
                                        defaultValue={user?.displayName}
                                        name="name"
                                        className="input input-bordered dark:text-black"
                                        required
                                   />
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text dark:text-white">
                                             Date
                                        </span>
                                   </label>
                                   <input
                                        // type="date"
                                        // type="date"
                                        // value={moment().format("dddd, MMMM YYYY")}
                                        value={moment().format("dddd, MMMM YYYY")}
                                        name="date"
                                        className="input input-bordered dark:text-black"
                                        // required
                                   />
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text dark:text-white">
                                             Email
                                        </span>
                                   </label>
                                   <input
                                        type="email"
                                        name="email"
                                        defaultValue={user?.email}
                                        placeholder="email"
                                        className="input input-bordered dark:text-black"
                                        required
                                   />
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text dark:text-white">
                                             Due Amount
                                        </span>
                                   </label>
                                   <input
                                        type="text"
                                        // name="due"
                                        defaultValue={"$" + price}
                                        className="input input-bordered dark:text-black"
                                        required
                                   />
                              </div>
                         </div>
                         <div className="form-control p-10">
                              <input
                                   type="submit"
                                   className="btn bg-[#FF3811] border-none text-white"
                                   value="Order Confirm"
                              />
                         </div>
                    </form>
               </div>
          </div>
     );
};

export default CheckOut;
