import React from 'react';

const FeaturedJobs = ({logo}) => {
     return (
          <div>
               <h1>Featured jobs are here</h1>
               <img src={logo} alt="" />
          </div>
     );
};

export default FeaturedJobs;