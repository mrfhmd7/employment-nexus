import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Jobs = () => {
     const [jobs, setJobs] = useState([]);
     const [categories, setCategories] = useState([]);
     // console.log(jobs);
     // console.log(categories);

     useEffect(() => {
          fetch('jobs.json')
               .then(res => res.json())
               .then(data => setJobs(data))
     }
          , []);

     useEffect(() => {
          fetch('categories.json')
               .then(res => res.json())
               .then(data => setCategories(data))
     }
          , []);

     return (
          <div>
               <div>
                    <h2 className='font-bold mt-20 text-5xl'>Jobs Category List</h2>
                    <p className='text-[#757575] mt-6'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                    <div className='flex justify-between mt-8'>
                         {
                              categories.map(category => <Category
                                   key={category.id}
                                   logo={category.logo}
                                   category_name={category.category_name}
                                   availability={category.availability}
                              ></Category>)
                         }
                    </div>
               </div>
               <div>
                    <h2>Featured Jobs</h2>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                    <div>
                         {
                              jobs.map(job => <FeaturedJobs
                                   key={job.id}
                                   logo={job.logo}
                              ></FeaturedJobs>)
                         }
                    </div>
               </div>
          </div>
     );
};

export default Jobs;