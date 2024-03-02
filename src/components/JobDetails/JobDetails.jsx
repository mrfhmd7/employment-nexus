import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {

     const details = useLoaderData();
     // console.log(details);

     let params = useParams();

     const jobDetail = details.find((job) => job.id == params.detailsId);
     // console.log(jobDetail);

     return (
          <>
               <h2 className='text-3xl font-bold mt-14 mb-14'>Job Details</h2>
               <div className='grid grid-cols-8 gap-6 text-start'>
                    <div className='col-span-5 text-lg text-[#757575] ml-10'>
                         <p className='mb-6'>
                              <span className='font-bold text-black'>Job Description: </span>
                              {jobDetail.job_description}
                         </p>
                         <p className='mb-6'>
                              <span className='font-bold text-black'>Job Responsibility: </span>
                              {jobDetail.job_responsibility}
                         </p>
                         <p className='mb-6'>
                              <span className='font-bold text-black'>Educational Requirement:</span>
                              <br />
                              {jobDetail.educational_requirements}
                         </p>
                         <p>
                              <span className='font-bold text-black'>Experience</span>
                              <br />
                              {jobDetail.experiences}
                         </p>
                    </div>
                    <div className=' col-span-3 ml-5 mr-10'>
                         <div className='bg-[#7E90FE4D] rounded text-[#757575] pl-7 pt-7 pb-4'>
                              <h4 className='text-[#1A1919] text-lg font-bold mb-5'>Job Details</h4>
                              <hr className='border-[#7E90FE4D] ml-5 mr-10' />
                              <div className='mt-5'>
                                   <p className='flex'>
                                        <img src="/icons/money.png" alt="" />
                                        <span className='text-[#474747] font-bold pl-1 pr-1'>Salary:</span>
                                        {jobDetail.salary} (Per Month)
                                   </p>
                                   <p className='flex mt-2'>
                                        <img src="/icons/calendar.png" alt="" />
                                        <span className='text-[#474747] font-bold pl-1 pr-1'>Job Title: </span>
                                        {jobDetail.job_title}
                                   </p>
                              </div>
                              <h4 className='text-[#1A1919] text-lg font-bold mt-6'>Contact Information</h4>
                              <hr className='border-[#7E90FE4D] ml-5 mt-4 mr-10' />
                              <div className='mt-5'>
                                   <p className='mt-2 flex'>
                                        <img src="/icons/phone.png" alt="" />
                                        <span className='text-[#474747] font-bold pl-1 pr-1'>Phone: </span>
                                        {jobDetail.contact_information.phone}
                                   </p>
                                   <p className='mt-2 flex'>
                                        <img src="/public/icons/email.png" alt="" />
                                        <span className='text-[#474747] font-bold pl-1 pr-1'>Email: </span>
                                        {jobDetail.contact_information.email}
                                   </p>
                                   <p className='flex mt-2'>
                                        <img className='h-6' src="/public/icons/Location2.png" alt="" />
                                        <span className='text-[#474747] font-bold pl-1 pr-1'>Address:</span>
                                        {jobDetail.contact_information.address}
                                   </p>
                              </div>
                         </div>
                         <button className='bg-gradient-to-l from-[#7E90FE] to-[#9873FF] rounded-lg h-12 w-full text-white font-bold text-lg mt-5'>Apply Now</button>
                    </div>
               </div>
          </>
     );
};

export default JobDetails;