import React from 'react';

const Category = ({ logo, category_name, availability }) => {
     console.log(logo, category_name, availability);
     return (
          <div>
               <img src={logo} alt="" />
               <h4>{category_name}</h4>
               <p>{availability}</p>
          </div>
     );
};

export default Category;