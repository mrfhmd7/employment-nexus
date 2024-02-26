import React from 'react';

const Landing = () => {
     return (
          <div className='flex bg-[#9873FF0D]'>
               <div className=' text-start'>
                    <h2 className='font-extrabold text-6xl flex items-center mt-32 leading-snug'>One Step
                         <br />Closer To Your
                    </h2>
                    <span className='font-extrabold text-start text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF]'> Dream Job</span>
                    <p className='pt-12 pb-6 text-[#757575] w-9/12'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='bg-gradient-to-l from-[#7E90FE] to-[#9873FF] rounded-lg h-12 w-32 text-white text-lg leading-8'>Get Started</button>
               </div>
               <img className='h-[600px] w-auto' src="/public/images/user.png" alt="" />
          </div>
     );
};
export default Landing;