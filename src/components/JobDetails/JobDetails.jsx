import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {

     const details = useLoaderData();
     // console.log(details);

     let params = useParams();

     const jobDetail = details.find((job) => job.id == params.detailsId);
     console.log(jobDetail);

     return (
          <>
               <h2 className='text-3xl font-bold mt-14 mb-14'>Job Details</h2>
               <div className='grid grid-cols-8 gap-6 text-start'>
                    <div className='col-span-5 text-lg text-[#757575] ml-10'>
                         <p>
                              <span className='font-bold text-black'>Job Description: </span>
                              {jobDetail.job_description}
                         </p>
                         <p>
                              <span className='font-bold text-black'>Job Responsibility: </span>
                              {jobDetail.job_responsibility}
                         </p>
                         <p>
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
                    <div>
                         <h4>Job Details</h4>
                         <h4>Contact Information</h4>
                    </div>
               </div>
          </>
     );
};

export default JobDetails;