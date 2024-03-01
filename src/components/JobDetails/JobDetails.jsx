import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
     const details = useLoaderData();
     console.log(details);
     return (
          <div>
               <h2>All jobs are here.</h2>
          </div>
     );
};

export default JobDetails;