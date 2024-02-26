import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';

const Jobs = () => {
     const [jobs, setJobs] = useState([]);
     const [categories, setCategories] = useState([]);
     // console.log(jobs);
     console.log(categories);

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
                    <h2>Jobs Category List</h2>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                    <div className='flex justify-between'>
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
          </div>
     );
};

export default Jobs;