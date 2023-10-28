import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const BookingInfo = ({ booking, setBookings, bookings }) => {
     const { _id, CustomerName, service, email, price, date, img, status } =
          booking;
     const handleRemove = (id) => {
          Swal.fire({
               title: "Are you sure?",
               text: "You won't be able to revert this!",
               icon: "warning",
               showCancelButton: true,
               confirmButtonColor: "#3085d6",
               cancelButtonColor: "#d33",
               confirmButtonText: "Yes, delete it!",
          }).then((result) => {
               if (result.isConfirmed) {
                    fetch(`http://localhost:5000/bookings/${id}`, {
                         method: "DELETE",
                    })
                         .then((res) => res.json())
                         .then((data) => {
                              console.log(data);
                              if (data.deletedCount > 0) {
                                   const remaining = bookings.filter(
                                        (item) => item._id !== id
                                   );
                                   setBookings(remaining);

                                   Swal.fire(
                                        "Deleted!",
                                        "Your file has been deleted.",
                                        "success"
                                   );
                              }
                         });
               }
          });
     };

     // Update
     const handleConfirm = (id) => {
          Swal.fire({
               title: "Are you sure?",
               // text: "You won't be able to revert this!",
               icon: "warning",
               showCancelButton: true,
               confirmButtonColor: "#3085d6",
               cancelButtonColor: "#d33",
               confirmButtonText: "Yes, Confirmed",
          }).then((result) => {
               if (result.isConfirmed) {
                    fetch(`http://localhost:5000/bookings/${id}`, {
                         method: "PATCH",
                         headers: {
                              "content-type": "application/json",
                         },
                         body: JSON.stringify({ status: "confirm" }),
                    })
                         .then((res) => res.json())
                         .then((data) => {
                              console.log(data);
                              if (data.modifiedCount > 0) {
                                   const remaining = bookings.filter(
                                        (item) => item._id !== id
                                   );
                                   const updated = bookings.find(
                                        (item) => item._id === id
                                   );
                                   updated.status = "confirm";
                                   const newBookings = [updated, ...remaining];
                                   setBookings(newBookings);
                                   Swal.fire({
                                        icon: "success",
                                        text: "Service successfully Confirmed !",
                                   });
                              }
                         });
               }
          });
     };

     return (
          <tr className="dark:text-white font-bold">
               <th>
                    <Link>
                         <button
                              onClick={() => handleRemove(_id)}
                              className="btn"
                         >
                              x
                         </button>
                    </Link>
               </th>
               <td>
                    <div className="avatar">
                         <div className="rounded w-12 h-12">
                              <img
                                   src={img}
                                   alt="Avatar Tailwind CSS Component"
                              />
                         </div>
                    </div>
               </td>
               <td>{CustomerName}</td>
               <td>{service}</td>
               <td>{date}</td>
               <td>{email}</td>
               <td>{price}</td>
               <th>
                    {status === 'confirm' ? (
                         <span className="text-red-500">Service Confirmed</span>
                    ) : (
                         <button
                              onClick={() => handleConfirm(_id)}
                              className="btn btn-ghost btn-xs"
                         >
                              Please confirm
                         </button>
                    )}
               </th>
          </tr>
     );
};

export default BookingInfo;
