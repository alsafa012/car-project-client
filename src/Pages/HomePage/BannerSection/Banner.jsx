import React from "react";

const Banner = () => {
     return (
          <div>
               <div className="carousel w-full h-[600px] rounded-xl">
                    <div id="slide1" className="carousel-item relative w-full ">
                         <img
                              src="https://i.ibb.co/ZcswH5W/1.jpg"
                              className="w-full "
                         />
                         <div className="absolute h-full  flex gap-4 items-center top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] ">
                              <div className="text-white space-y-3 md:w-1/3 ml-5">
                                   <h3 className=" text-3xl md:text-4xl lg:text-5xl font-bold">
                                        Affordable Price For Car Servicing
                                   </h3>
                                   <p>
                                        There are many variations of passages of
                                        available, but the majority have
                                        suffered alteration in some form
                                   </p>
                                   <div className="flex gap-2">
                                        <button className="btn">
                                             Discover More
                                        </button>
                                        <button className="btn">
                                             Latest Project
                                        </button>
                                   </div>
                              </div>
                         </div>
                         <div className="absolute flex justify-center md:justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                              <a href="#slide4" className="btn btn-circle">
                                   ❮
                              </a>
                              <a href="#slide2" className="btn btn-circle">
                                   ❯
                              </a>
                         </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                         <img
                              src="https://i.ibb.co/xFVYkCr/3.jpg"
                              className="w-full "
                         />
                         <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                              <a href="#slide1" className="btn btn-circle">
                                   ❮
                              </a>
                              <a href="#slide3" className="btn btn-circle">
                                   ❯
                              </a>
                         </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                         <img
                              src="https://i.ibb.co/PwHN0YV/2.jpg"
                              className="w-full "
                         />
                         <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                              <a href="#slide2" className="btn btn-circle">
                                   ❮
                              </a>
                              <a href="#slide4" className="btn btn-circle">
                                   ❯
                              </a>
                         </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                         <img
                              src="https://i.ibb.co/BVhTKjk/6.jpg"
                              className="w-full "
                         />
                         <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                              <a href="#slide3" className="btn btn-circle">
                                   ❮
                              </a>
                              <a href="#slide1" className="btn btn-circle">
                                   ❯
                              </a>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Banner;
