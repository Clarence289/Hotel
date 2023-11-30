import React, { useState, useEffect } from 'react';

// Logo
import LogoWhite from '../assets/img/logo-white.svg';
import LogoDark from '../assets/img/logo-dark.svg';

function Header() {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeader(window.scrollY > 50);
    };

    // Listen to the scroll event
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures that the effect runs only once when the component mounts

  return (
    <header
      className={`${
        header ? 'bg-white py-6 shadow-lg' : 'bg-transparent py-8'
      } fixed z-50 w-full transition-all duration-500`}
    >
      <div className='container mx-auto flex flex-col items-center gap-y-6
      lg:flex-row lg:justify-between lg:gap-y-0'>
        {/* Logo */}
        <a href='/'>
          {header ? (
            <img className='w-[160px]' src={LogoDark} alt='Dark Logo' />
          ) : (
            <img className='w-[160px]' src={LogoWhite} alt='White Logo' />
          )}
        </a>
        {/* Nav */}
        <nav
          className={`${
            header ? 'text-primary' : 'text-white'
          } flex gap-x-4 font-tertiary tracking-[3px] text-[15px] items-center uppercase lg:gap-x-8`}
        >
          <a href='#home' className='hover:text-accent transition'>
            Home
          </a>
          <a href='#rooms' className='hover:text-accent transition'>
            Rooms
          </a>
          <a href='#restaurant' className='hover:text-accent transition'>
            Restaurant
          </a>
          <a href='#spa' className='hover:text-accent transition'>
            Spa
          </a>
          <a href='#contact' className='hover:text-accent transition'>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
