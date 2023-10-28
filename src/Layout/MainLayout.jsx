// import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/SharedPages/Footer";
import Navbar from "../Components/HeaderSection/Navbar/Navbar";
// import { useTheme } from "../Hooks/DarkTheme";

const MainLayout = () => {
     // const {handleDark,mode}=useTheme()
     // const [mode ,setMode]= useState('light')
     // const handleDark = ()=>{
     //      console.log('dark mode');
     //      const html = document.documentElement
     //      if(mode === 'light'){
     //           html.classList.remove('light')
     //           html.classList.add('dark')
     //           setMode('dark')
     //           localStorage.setItem('mode',"dark")

     //      }else{
     //           html.classList.remove('dark')
     //           html.classList.add('light')
     //           setMode('light')
     //           localStorage.setItem('mode',"light")
     //      }
     // }
     // useEffect(()=>{
     //      const currentMode = localStorage.getItem('mode') || 'light';
     //      document.documentElement.classList.add(currentMode)
     //      setMode(currentMode)
     // },[])
     return (
          <div className="dark:bg-black">
               {/* <div className="text-center text-yellow-300 dark:text-red-600">
                    <h1>Dark mode</h1>
                    <p>
                         Lorem ipsum dolor sit amet consectetur adipisicing
                         elit. Voluptatum pariatur placeat itaque quo, magnam
                         sed ipsa Nisi ullam et facilis. Enim ducimus, quis
                         ducimus aut.
                    </p>
                    <button onClick={handleDark} className="btn">{mode === 'light'?'light' :'dark'}</button>
               </div> */}
               <div className="">
                    <Navbar></Navbar>
                    <Outlet></Outlet>
                    <Footer></Footer>
               </div>
          </div>
     );
};

export default MainLayout;
