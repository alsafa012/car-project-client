import React from "react";
import { Link } from "react-router-dom";

const ServiceCards = ({ service }) => {
     const { _id, title, service_id, img, price, description } = service;

     return (
          <div>
               <div className="bg-base-100 shadow-xl rounded-xl ">
                    <div className="m-5">
                         <img
                              className="h-[300px] w-full rounded-xl object-fill"
                              src={img}
                              alt="Shoes"
                         />
                    </div>
                    <div className=" p-5">
                         <h2 className="card-title font-bold text-xl">{title}</h2>
                         <div className=" flex justify-between items-center">
                              <div>
                                   <p className="text-[#FF3811] font-bold">
                                        Price : ${price}
                                   </p>
                              </div>
                              <div className="">
                                   <Link to={`/checkOut/${_id}`}>
                                        <button className="btn">
                                             {" "}
                                             -->>--{" "}
                                        </button>
                                   </Link>
                              </div>
                         </div>
                    </div>
                    {/* <p>{description.slice(0, 100)}</p> */}
               </div>
          </div>
     );
};

export default ServiceCards;
