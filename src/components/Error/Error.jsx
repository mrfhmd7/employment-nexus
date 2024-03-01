import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
     const error = useRouteError();
     return (
          <div>
               <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
                    <div className="max-w-md w-full text-center">
                         <h2 className="text-4xl font-bold text-gray-800 mb-4">Oops!😢😢</h2>
                         <p className="text-xl text-gray-600 mb-4">Sorry, an unexpected error has occurred.</p>
                         <p className="text-xl mt-7 mb-7">
                              <i>{error.statusText || error.message}</i>
                         </p>
                         <Link
                              to="/"
                              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg transition duration-300"
                         >
                              Go Home
                         </Link>
                    </div>
               </div>
          </div>
     );
};

export default Error;