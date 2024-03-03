import React from 'react';
import { Link } from 'react-router-dom';

const AppliedJobsDetails = ({ job }) => {
     console.log(job);
     return (
          <div className='w-3/4 border border-[#E8E8E8] flex justify-between items-center rounded-lg mb-6'>
               <div className='ml-6 bg-[#4922b30d] rounded-lg w-40 h-40 inline-flex items-center'>
                    <img className='ml-5' src={job.logo} alt="" />
               </div>
               <div>
                    <h3 className='text-2xl font-bold mt-4'>{job.job_title}</h3>
                    <h4 className='text-xl font-semibold mt-3 text-[#757575]'>{job.company_name}</h4>
                    <div className='inline-flex text-center mt-3'>
                         <p className='p-2 border-2 rounded-md border-[#7E90FE] text-transparent bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF]'>{job.remote_or_onsite}</p>
                         <p className='p-2 border-2 rounded-md border-[#7E90FE] ml-4 text-transparent bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF]'>{job.job_type}</p>
                    </div>
                    <div className='flex gap-4 mt-5 text-[#757575] pb-4'>
                         <p className='flex'>
                              <img src='/icons/Location.png' alt="" />
                              {job.location}
                         </p>
                         <p className='flex'>
                              <img src="/icons/money.png" alt="" />
                              {job.salary}
                         </p>
                    </div>
               </div>
               <Link className='mr-6' to={`/details/${job.id}`}>
                    <button
                         className='bg-gradient-to-l from-[#7E90FE] to-[#9873FF] rounded-lg mt-5 mb-5 ml-10 h-12 w-32 text-white font-bold'>
                         View Details
                    </button>
               </Link>
          </div>
     );
};

export default AppliedJobsDetails;