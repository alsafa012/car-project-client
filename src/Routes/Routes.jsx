import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/HomePage/HomePage";
import Error from "../Pages/ErrorPage/Error";
import ServicePage from "../Pages/ServicePage/ServicePage";
import Login from "../Pages/LoginPage/Login";
import Register from "../Pages/RegisterPage/Register";
import CheckOut from "../Pages/CheckOutPage/CheckOut";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

// import Cookies from "js-cookie";
// const token = Cookies.get('token');
// console.log(token);

const myCreatedRouter = createBrowserRouter([
     {
          path: "/",
          element: <MainLayout></MainLayout>,
          errorElement: <Error></Error>,
          children: [
               {
                    path: "/",
                    element: <HomePage></HomePage>,
               },
               {
                    path: "/services",
                    element: <ServicePage></ServicePage>,
               },
               {
                    path: "/login",
                    element: <Login></Login>,
               },
               {
                    path: "/register",
                    element: <Register></Register>,
               },
               {
                    path: "/checkOut/:id",
                    element: (
                         <PrivateRoute>
                              <CheckOut></CheckOut>
                         </PrivateRoute>
                    ),
                    loader: ({ params }) =>
                         fetch(`http://localhost:5000/services/${params.id}`),
               },
               {
                    path: "/bookings",
                    element: (
                         <PrivateRoute>
                              <Bookings></Bookings>
                         </PrivateRoute>
                    ),
                    // loader: () =>
                    //      fetch("http://localhost:5000/bookings?email", {
                    //           method: "GET",
                    //           credentials: "include", // equivalent to axios's withCredentials:true
                    //      }),
               },
          ],
     },
]);

export default myCreatedRouter;
