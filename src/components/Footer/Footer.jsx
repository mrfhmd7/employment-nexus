import React from 'react';

const Footer = () => {
     return (
          <div className=' bg-[#1A1919] mt-7 rounded-md'>
               <div className='grid grid-cols-6'>
                    <div className='col-span-2 mt-7'>
                         <h2 className='text-3xl text-white font-bold'>Employment Nexus</h2>
                         <p className='text-white opacity-70 mt-4 ml-2'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                         <img className='mx-auto mt-3' src="/icons/social.png" alt="" />
                    </div>
                    <div>
                         <h4 className='mt-7 text-lg font-semibold text-white'>Company</h4>
                         <p className='text-white opacity-70 mt-3'>
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
                         <h4 className='mt-7 text-lg font-semibold text-white'>Product</h4>
                         <p className='text-white opacity-70 mt-3'>
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
                         <h4 className='mt-7 text-lg font-semibold text-white'>Support</h4>
                         <p className='text-white opacity-70 mt-3'>
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
                         <h4 className='mt-7 text-lg font-semibold text-white'>Contact</h4>
                         <p className='text-white opacity-70 mt-3'>
                              524 Broadway , NYC
                              <br />
                              +1 777 - 978 - 5570
                         </p>
                    </div>
               </div>
               <hr className='border-2 border-[#9873FF4D] mt-4 mb-4' />
               <div className='flex justify-between text-white opacity-70 pb-4 ml-4 mr-4'>
                    <p>@2024 CareerHub. All Rights Reserved</p>
                    <p>Powered by Employment Nexus</p>
               </div>
          </div>
     );
};

export default Footer;