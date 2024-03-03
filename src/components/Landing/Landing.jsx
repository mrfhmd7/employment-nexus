import React from 'react';

const Landing = () => {
     return (
          <div className='flex flex-col-reverse md:flex-row bg-[#9873FF0D]'>
               <div className='text-center md:text-left px-4 md:px-8 py-12 md:py-32 md:w-1/2'>
                    <h2 className='font-extrabold text-4xl md:text-6xl leading-tight md:leading-snug'>
                         One Step Closer To Your
                         <br />
                         <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF]'>Dream Job</span>
                    </h2>
                    <p className='py-6 text-[#757575]'>Explore thousands of job opportunities with all the information you need. It's your future. Come find it. Manage all your job applications from start to finish.</p>
                    <button className='bg-gradient-to-l from-[#7E90FE] to-[#9873FF] rounded-lg h-12 w-32 text-white text-lg font-bold'>Get Started</button>
               </div>
               <img className='h-auto md:h-[600px] w-full md:w-auto' src="/images/user.png" alt="" />
          </div>
     );
};

export default Landing;