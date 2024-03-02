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
               <h2>All jobs are here{jobDetail.id}</h2>
          </div>
     );
};

export default JobDetails;