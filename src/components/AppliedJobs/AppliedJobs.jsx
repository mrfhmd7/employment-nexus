import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { getShoppingCart } from '../FakeDB/FakeDB';
import AppliedJobsDetails from '../AppliedJobsDetails/AppliedJobsDetails';

const AppliedJobs = () => {
     const jobs = useLoaderData();
     // console.log(jobs);

     const savedJobs = getShoppingCart();

     let matchedJobs = [];
     for (const id in savedJobs) {
          let findJobs = jobs.find(job => job.id == id);
          matchedJobs.push(findJobs);
     };
     // console.log(matchedJobs);

     return (
          <div>
               <div>
                    <h2>Applied Jobs</h2>
               </div>
               <div>
                    {
                         matchedJobs.map(job =>
                              <AppliedJobsDetails
                                   key={job.id}
                                   job={job}
                              >
                              </AppliedJobsDetails>
                         )
                    }
               </div>
          </div>
     );
};

export default AppliedJobs;