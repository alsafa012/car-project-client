import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingInfo from "./BookingInfo";
import { Link } from "react-router-dom";
import axios from "axios";
// import axios from "axios";
// import { useLoaderData } from "react-router-dom";

const Bookings = () => {
     const { user } = useContext(AuthContext);
     // const data = useLoaderData()
     // console.log(data)
     const [bookings, setBookings] = useState([]);
     // const myUser = user?.email;
     // useEffect(() => {
     //      if (myUser) {
     //          const myBookings = data.filter(item=> item.email === myUser)
     //          setBookings(myBookings);
     //      }
     // }, [data,myUser]);
     useEffect(() => {
          if (user) {
               axios.get(`http://localhost:5000/bookings?email=${user.email}`,{withCredentials:true})
               // axios.get(`http://localhost:5000/bookings?email=mama@mami.com`,{withCredentials:true})
               .then(res=>{
                    setBookings(res.data);
               })

               // fetch(`http://localhost:5000/bookings?email=${user.email}`, {
               //      method: "GET",
               //      credentials: "include",
               // })
               //      .then((res) => res.json())
               //      .then((data) => {
               //           const myBookings = data.filter(
               //                (item) => item.email === myUser
               //           );
               //           setBookings(myBookings);
               //      });
          }
     }, []);
     return (
          <div className="min-h-screen border-red-500 border ">
               {bookings.length === 0 ? (
                    <div className="text-center mx-auto text-xl md:text-3xl font-bold mt-20 space-y-2">
                         <h1>Oops...!</h1>
                         <h3>No Product Added Yet.</h3>
                         <Link to={"/"}>
                              <button className="btn mt-2 bg-gradient-to-r from-blue-700 to-blue-400 text-white border-none">
                                   Click Here for Home Page..
                              </button>
                         </Link>
                    </div>
               ) : (
                    <div className="dark:text-white">
                         <h2 className="text-5xl text-center">
                              Bookings: {bookings.length}
                         </h2>
                         <div className="overflow-x-auto">
                              <table className="table">
                                   {/* head */}
                                   <thead className="dark:text-white font-bold">
                                        <tr>
                                             <th>
                                                  <label>
                                                       <input
                                                            type="checkbox"
                                                            className="checkbox"
                                                       />
                                                  </label>
                                             </th>
                                             <th>Avatar</th>
                                             <th>Name</th>
                                             <th>service</th>
                                             <th>date</th>
                                             <th>user name</th>
                                             <th>Price</th>
                                             <th>Favorite Color</th>
                                             <th></th>
                                        </tr>
                                   </thead>
                                   <tbody>
                                        {bookings.map((booking) => (
                                             <BookingInfo
                                                  key={booking._id}
                                                  booking={booking}
                                                  bookings={bookings}
                                                  setBookings={setBookings}
                                             ></BookingInfo>
                                        ))}
                                   </tbody>
                              </table>
                         </div>
                    </div>
               )}
          </div>
     );
};

export default Bookings;
