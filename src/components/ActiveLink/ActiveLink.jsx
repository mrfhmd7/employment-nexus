import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
     return (
          <div>
               <NavLink
                    to={to}
                    className={({ isActive }) =>
                         isActive ? "text-transparent bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF]" : ""
                    }
               >
                    {children}
               </NavLink>
          </div>
     );
};

export default ActiveLink;