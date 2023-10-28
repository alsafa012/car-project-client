import React from "react";
import photo1 from "../../../assets/images/about_us/person.jpg";
import photo2 from "../../../assets/images/about_us/parts.jpg";

const About = () => {
     return (
          <div className="">
               <div className="my-20">
                    <div className="hero-content flex-col md:flex-row">
                         <div className="md:w-1/2 relative">
                              <img
                                   src={photo1}
                                   className="w-3/4 rounded-lg shadow-2xl"
                              />
                              <img
                                   src={photo2}
                                   className="right-5 top-1/2 w-1/2 absolute rounded-lg shadow-2xl border-white border-l-8 border-t-8"
                              />
                         </div>
                         <div className="md:w-1/2">
                              <div className="space-y-4 md:w-[90%] mt-5 dark:text-white">
                                   <h1 className="font-bold text-[#FF3811]">
                                        About Us
                                   </h1>
                                   <p className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#151515] dark:text-white">
                                        We are qualified & of experience in this
                                        field
                                   </p>
                                   <p className="text-sm font-light">
                                        There are many variations of passages of
                                        Lorem Ipsum available, but the majority
                                        have suffered alteration in some form,
                                        by injected humour, or randomised words
                                        which don't look even slightly
                                        believable.{" "}
                                   </p>
                                   <p className="text-sm font-light">
                                        There are many variations of passages of
                                        Lorem Ipsum available, but the majority
                                        have suffered alteration in some form,
                                        by injected humour, or randomised words
                                        which don't look even slightly
                                        believable.{" "}
                                   </p>
                                   <p className="text-sm font-light">
                                        the majority have suffered alteration in
                                        some form, by injected humour, or
                                        randomised words which don't look even
                                        slightly believable.{" "}
                                   </p>
                                   <button className="btn text-white bg-[#FF3811] border-none">
                                        Get More Info
                                   </button>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default About;
