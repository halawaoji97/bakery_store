import React, { useState } from 'react';
import Union from '../assets/img/icon/Union.png';
import Close from '../assets/img/icon/Close.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [toggleSidebar, settoggleSidebar] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    settoggleSidebar(!toggleSidebar);
  };

  return (
    <header className='bg-grey-secondary relative  md:fixed rounded-br-3xl rounded-bl-3xl flex md:py-4 p-0 h-0 w-full rounded z-50 md:h-28 '>
      <div className='container flex justify-between items-center mx-auto align-items-center py-8 relative'>
        <button
          className='md:invisible bg-white flex justify-center items-center w-20 h-16 rounded-bl-3xl cursor-pointer  fixed z-10 top-0 right-0'
          onClick={handleClick}
        >
          {toggleSidebar ? (
            <img src={Close} alt='Open' className='text-dark-primary' />
          ) : (
            <img src={Union} alt='Close' className='text-dark-primary' />
          )}
        </button>
        <Link to='/' className='h-12   md:visible lg:visible relative'>
          <h1 className='text-yellow-primary font-bold text-2xl'>
            Bakery Store
          </h1>
        </Link>
        <nav
          className={`${
            toggleSidebar ? 'scale-x-100' : 'scale-x-0'
          }  fixed top-0 left-0 right-0 flex  transition-tansform ease-in duration-700 origin-top-right md:scale-x-100 lg:scale-x-100 md:visible  md:flex md:static lg:static h-96 md:h-auto md:py-12 rounded-2xl md:w-1/2`}
        >
          <ul className='flex w-full md:w-full h-full md:h-auto bg-dark-primary justify-around md:bg-transparent md:from-transparent md:to-transparent rounded-2xl flex-col md:flex-row lg:flex-row items-center py-10'>
            <li className='block h-8 relative group' onClick={handleClick}>
              <span className='block container h-0.5 w-full  rounded-full bg-dark-primary absolute bottom-0 left-0 right-0 scale-x-0 group-hover:scale-x-100 transition-tansform ease-in duration-700 origin-left'></span>
              <Link
                to='/'
                className='text-white md:text-dark-primary hover:text-yellow-primary active active:text-yellow-primary font-bold md:font-semibold lg:font-semibold transition-all ease-in delay-75 duration-300'
              >
                Home
              </Link>
            </li>
            <li className='block h-8 relative group' onClick={handleClick}>
              <span className='block container h-0.5 w-full  rounded-full bg-dark-primary absolute bottom-0 left-0 right-0 scale-x-0 group-hover:scale-x-100 transition-tansform ease-in duration-700 origin-left'></span>
              <Link
                to='/'
                className='text-white md:text-dark-primary hover:text-yellow-primary active active:text-yellow-primary font-bold md:font-semibold lg:font-semibold transition-all ease-in delay-75 duration-300'
              >
                Services
              </Link>
            </li>
            <li className='block h-8 relative group' onClick={handleClick}>
              <span className='block container h-0.5 w-full  rounded-full bg-dark-primary absolute bottom-0 left-0 right-0 scale-x-0 group-hover:scale-x-100 transition-tansform ease-in duration-700 origin-left'></span>
              <Link
                to='/'
                className='text-white md:text-dark-primary hover:text-yellow-primary active active:text-yellow-primary font-bold md:font-semibold lg:font-semibold transition-all ease-in delay-75 duration-300'
              >
                Products
              </Link>
            </li>
            <li className='block h-8 relative group' onClick={handleClick}>
              <span className='block container h-0.5 w-full  rounded-full bg-dark-primary absolute bottom-0 left-0 right-0 scale-x-0 group-hover:scale-x-100 transition-tansform ease-in duration-700 origin-left'></span>
              <Link
                to='/'
                className='text-white md:text-dark-primary hover:text-yellow-primary active active:text-yellow-primary font-bold md:font-semibold lg:font-semibold transition-all ease-in delay-75 duration-300'
              >
                About
              </Link>
            </li>
            <li className='block h-8 relative group' onClick={handleClick}>
              <span className='block container h-0.5 w-full  rounded-full bg-dark-primary absolute bottom-0 left-0 right-0 scale-x-0 group-hover:scale-x-100 transition-tansform ease-in duration-700 origin-left'></span>
              <Link
                to='/'
                className='text-white md:text-dark-primary hover:text-yellow-primary active active:text-yellow-primary font-bold md:font-semibold lg:font-semibold transition-all ease-in delay-75 duration-300'
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
