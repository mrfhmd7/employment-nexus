import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Main = () => {
     return (
          <div className='font-manrope'>
               <Header />
               <Outlet />
               {/* <Footer /> */}
          </div>
     );
};

export default Main;