import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
     return (
          <nav className=''>
               <h2>EmploymentNexus</h2>
               <div className='font-bold'>
                    <Link className='mr-5' to='/'>Home</Link>
                    <Link className='mr-5' to='/statistics'>Statistics</Link>
                    <Link className='mr-5' to='/applied-jobs'>Applied Jobs</Link>
                    <Link className='' to='/blogs'>Blogs</Link>
               </div>
               <button>Apply now</button>
          </nav>
     );
};

export default Header;