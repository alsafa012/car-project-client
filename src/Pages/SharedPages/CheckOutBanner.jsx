import React from "react";
import img from "../../assets/images/checkout/checkout.png";
// import moment from "moment/moment";

const CheckOutBanner = () => {
     // const hello = {
     //      clip-path: polygon(7% 75%, 93% 75%, 100% 100%, 0% 100%);
     // }
     return (
          // .custom-clip-path {
          //      clip-path: polygon(7% 75%, 93% 75%, 100% 100%, 0% 100%);
          //    }
          <div className="relative w-full">
               {/* <p>{moment().format('MMMM Do YYYY, h:mm:ss a')}</p> */}
               <img className="object-fill w-full" src={img} alt="banner" />
               {/* <button style={ 'clip-path: polygon(7% 75%, 93% 75%, 100% 100%, 0% 100%)'} className='btn bg-[#FF3811] absolute bottom-0 left-[45%] border-none text-white '>Home/Checkout</button> */}
               <div>
                    <button   style={{
                         clipPath:
                              "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)",
                    }} className="btn bg-[#FF3811] absolute bottom-0 left-[45%] border-none text-white">
                         Home/Checkout
                    </button>
               </div>
          </div>
     );
};

export default CheckOutBanner;
