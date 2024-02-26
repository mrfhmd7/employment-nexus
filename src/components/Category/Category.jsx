import React from 'react';

const Category = ({ logo, category_name, availability }) => {
     console.log(logo, category_name, availability);
     return (
          <div className='bg-[#4922b30d] w-60 h-48 pl-10 pt-10 rounded-lg text-start'>
               <img className='bg-[#9873FF19] rounded-md' src={logo} alt="" />
               <h4 className='font-extrabold mt-4'>{category_name}</h4>
               <p className='text-[#A3A3A3] mt-4'>{availability}</p>
          </div>
     );
};

export default Category;