import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
     return (
          <nav className='flex justify-between'>
               <h2 className='font-bold text-3xl text-[#1A1919]'>EmploymentNexus</h2>
               <div className='font-bold text-[#757575] space-x-5 -ml-10'>
                    <Link to='/'>Home</Link>
                    <Link to='/statistics'>Statistics</Link>
                    <Link to='/applied-jobs'>Applied Jobs</Link>
                    <Link to='/blogs'>Blogs</Link>
               </div>
               <button className='bg-gradient-to-l from-[#7E90FE] to-[#9873FF] rounded-lg h-12 w-28 text-white text-lg'>Apply now</button>
          </nav>
     );
};

export default Header;