import React from 'react';

const Footer = () => {
     return (
          <div>
               <div className='grid grid-cols-6'>
                    <div>
                         <h2>Employment Nexus</h2>
                         <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                         <img src="/public/icons/social.png" alt="" />
                    </div>
                    <div>
                         <h4>Company</h4>
                         <p>
                              About Us
                              <br />
                              Work
                              <br />
                              Latest News
                              <br />
                              Careers
                         </p>
                    </div>
                    <div>
                         <h4>Product</h4>
                         <p>
                              Prototype
                              <br />
                              Plans & Pricing
                              <br />
                              Customers
                              <br />
                              Integrations
                         </p>
                    </div>
                    <div>
                         <h4>Support</h4>
                         <p>
                              Help Desk
                              <br />
                              Sales
                              <br />
                              Become a Partner
                              <br />
                              Developers
                         </p>
                    </div>
                    <div>
                         <h4>Contact</h4>
                         <p>
                              524 Broadway , NYC
                              <br />
                              +1 777 - 978 - 5570
                         </p>
                    </div>
               </div>
               <hr />
               <div className='flex justify-between'>
                    <p>@2024 CareerHub. All Rights Reserved</p>
                    <p>Powered by Employment Nexus</p>
               </div>
          </div>
     );
};

export default Footer;