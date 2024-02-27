import React from 'react';

const FeaturedJobs = ({ logo, job_title, company_name, remote_or_onsite, job_type, location, salary }) => {
     return (
          <div className='rounded-md border border-[#E8E8E8]  shadow-xl text-start'>
               <div className='mt-8 ml-10'>
                    <img src={logo} alt="" />
                    <h3 className='text-2xl font-bold mt-4'>{job_title}</h3>
                    <h4 className='text-xl font-semibold mt-3 text-[#757575]'>{company_name}</h4>
                    <div className='inline-flex text-center mt-3'>
                         <p className='p-2 border-2 rounded-md border-[#7E90FE] text-transparent bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF]'>{remote_or_onsite}</p>
                         <p className='p-2 border-2 rounded-md border-[#7E90FE] ml-4 text-transparent bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF]'>{job_type}</p>
                    </div>
                    <div className='flex gap-4 mt-5 text-[#757575]'>
                         <p className='flex'>
                              <img src='/icons/Location.png' alt="" />
                              {location}
                         </p>
                         <p className='flex'>
                              <img src="/public/icons/money.png" alt="" />
                              {salary}
                         </p>
                    </div>
               </div>
          </div>
     );
};

export default FeaturedJobs;