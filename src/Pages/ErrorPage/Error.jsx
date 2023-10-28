import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
     return (
          <div>
              <Link to={"/"}> <button className='btn text-5xl'> Go to Home </button></Link>
          </div>
     );
};

export default Error;