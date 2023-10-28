import React from "react";
import Banner from "./BannerSection/Banner";
import About from "./AboutSection/About";
import Services from "./ServicesSection/Services";

const HomePage = () => {
     return (
          <div>
               <div className="container mx-auto">
                    <Banner></Banner>
                    <About></About>
                    <Services></Services>
               </div>
          </div>
     );
};

export default HomePage;
