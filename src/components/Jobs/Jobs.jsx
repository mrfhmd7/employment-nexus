import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Jobs = () => {
     const [jobs, setJobs] = useState([]);
     const [categories, setCategories] = useState([]);
     // console.log(jobs);
     // console.log(categories);

     const [showAll, setShowAll] = useState(false);

     const handleShowAll = () => {
          setShowAll(true);
     }

     const handleShowLess = () => {
          setShowAll(false);
     }

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
                    <h2 className='font-bold mt-24 text-5xl'>Jobs Category List</h2>
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
                    <h2 className='text-5xl font-bold text-[#1A1919] mt-24'>Featured Jobs</h2>
                    <p className='mt-5 mb-6 text-[#757575]'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                    <div className='grid grid-cols-2 gap-10 mb-7'>
                         {
                              jobs.slice(0, showAll ? 6 : 4).map(job => <FeaturedJobs
                                   key={job.id}
                                   logo={job.logo}
                                   job_title={job.job_title}
                                   company_name={job.company_name}
                                   remote_or_onsite={job.remote_or_onsite}
                                   job_type={job.job_type}
                                   location={job.location}
                                   salary={job.salary}
                                   job={job}
                              ></FeaturedJobs>)
                         }
                    </div>
                    {
                         !showAll && (
                              <div>
                                   <span
                                        onClick={handleShowAll}>
                                        <button className='bg-gradient-to-l from-[#7E90FE] to-[#9873FF] rounded-lg h-12 w-32 text-white text-lg'>Show All</button>
                                   </span>
                              </div>
                         )
                    }
                    {
                         showAll && (
                              <div>
                                   <span
                                        onClick={handleShowLess}>
                                        <button className='bg-gradient-to-l from-[#7E90FE] to-[#9873FF] rounded-lg h-12 w-32 text-white text-lg'>Show Less</button>
                                   </span>
                              </div>
                         )
                    }
               </div>
          </div>
     );
};

export default Jobs;