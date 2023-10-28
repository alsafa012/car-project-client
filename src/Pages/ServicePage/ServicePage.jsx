import React from "react";
import CheckOutBanner from "../SharedPages/CheckOutBanner";
import moment from "moment";

const ServicePage = () => {
     const handleAddServices = () => {
          console.log("llss");
     };
     return (
          <div>
               <CheckOutBanner></CheckOutBanner>
               <div className=" bg-[#F3F3F3] container mx-auto my-10 border">
                    {/* <p>{description}</p> */}
                    {/* <p>{title}</p> */}
                    {/* <div className="hero min-h-screen bg-base-200"> */}
                    {/* <div className="hero-content flex-col lg:flex-row-reverse"> */}
                    {/* <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"> */}
                    <form onSubmit={handleAddServices}>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-10">
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text ">
                                             Name
                                        </span>
                                   </label>
                                   <input
                                        type="text"
                                        placeholder="name"
                                        // defaultValue={user?.displayName}
                                        name="name"
                                        className="input input-bordered dark:text-black"
                                        required
                                   />
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text ">
                                             Date
                                        </span>
                                   </label>
                                   <input
                                        // type="date"
                                        // type="date"
                                        name="date"
                                        value={moment().format("dddd, MMMM YYYY")}
                                        className="input input-bordered dark:text-black"
                                        // required
                                   />
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text ">
                                             Email
                                        </span>
                                   </label>
                                   <input
                                        type="email"
                                        name="email"
                                        // defaultValue={user?.email}
                                        placeholder="email"
                                        className="input input-bordered dark:text-black"
                                        required
                                   />
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text ">
                                             Due Amount
                                        </span>
                                   </label>
                                   <input
                                        type="text"
                                        // name="due"
                                        // defaultValue={"$" + price}
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

export default ServicePage;
