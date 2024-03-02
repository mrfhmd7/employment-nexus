import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {

     const details = useLoaderData();
     // console.log(details);

     let params = useParams();

     const jobDetail = details.find((job) => job.id == params.detailsId);
     console.log(jobDetail);

     return (
          <div>
               <div>
                    <p>
                         <span>Job Description: </span>
                         {jobDetail.job_description}
                    </p>
                    <p>
                         <span>Job Responsibility: </span>
                         {jobDetail.job_responsibility}
                    </p>
                    <p>
                         <span>Educational Requirement:</span>
                         {jobDetail.educational_requirements}
                    </p>
                    <p>
                         <span>Experience</span>
                         {jobDetail.experiences}
                    </p>
               </div>
               <div>
                    
               </div>
          </div>
     );
};

export default JobDetails;