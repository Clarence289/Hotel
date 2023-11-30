import React from 'react';
// logo
import LogoWhite from '../assets/img/logo-white.svg';

const Footer = () => {
  return (
    <footer className='bg-primary py-12'>
      <div className='container mx-auto flex items-center justify-between text-white'>
        {/* logo */}
        <a href='/'>
        <img src={LogoWhite} alt='Logo' />
        </a>
        
        Copyright &copy; 2023. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
