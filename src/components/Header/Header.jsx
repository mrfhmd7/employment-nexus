import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
     return (
          <nav className="flex justify-between items-center bg-[#9873FF19] h-20 rounded-md bg-[url(/images/bg1.png)] bg-contain bg-no-repeat">
               <Link className='font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to bg-purple-600' to='/'>EmploymentNexus</Link>
               <div className='font-bold text-[#757575] space-x-5 -ml-10 flex'>
                    <ActiveLink to='/'>Home</ActiveLink>
                    <ActiveLink to='/statistics'>Statistics</ActiveLink>
                    <ActiveLink to='/applied-jobs'>Applied Jobs</ActiveLink>
                    <ActiveLink to='/blogs'>Blogs</ActiveLink>
               </div>
               <button className='bg-gradient-to-l from-[#7E90FE] to-[#9873FF] rounded-lg h-12 w-40 text-white text-lg font-bold'>Start Applying</button>
          </nav>
     );
};

export default Header;