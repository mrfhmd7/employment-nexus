import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { getShoppingCart } from '../FakeDB/FakeDB';

const AppliedJobs = () => {
     const jobs = useLoaderData();
     // console.log(jobs);

     const savedJobs = getShoppingCart();

     let matchedJobs = [];
     for (const id in savedJobs) {
          let findJobs = jobs.find(job => job.id == id);
          matchedJobs.push(findJobs);
     };
     console.log(matchedJobs);

     return (
          <div>
               <h3>This is from AppliedJObs..</h3>
          </div>
     );
};

export default AppliedJobs;