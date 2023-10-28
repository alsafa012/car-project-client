import React, { useEffect, useState } from 'react';
import ServiceCards from './ServiceCards';

const Services = () => {
     const [services,setServices]=useState([])
 
 useEffect(()=>{
     fetch('http://localhost:5000/services')
     .then(res=>res.json())
     .then(data=>setServices(data))
 },[])
     return (
         <div className='mb-20'>
           <div className='text-center dark:text-white mb-5'>
               <h2 className='text-[#FF3811] font-bold'>Service</h2>
               <p className='text-3xl lg:text-5xl font-bold my-4'>Our Service Area</p>
               <p className='text-sm font-thin'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
          </div>
          <div className=''>
          <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 mx-2 md:mx-0'>
               {
                    services.map(service =><ServiceCards key={service._id} service={service}></ServiceCards>)
               }
          </div>
          </div>
         </div>
     );
};

export default Services;