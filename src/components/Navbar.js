import React, { useEffect, useState } from 'react';
import Union from '../assets/img/icon/Union.png';
import Close from '../assets/img/icon/Close.svg';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [toggleSidebar, settoggleSidebar] = useState(false);
  const [backgroundNavbar, setBackgroundNavbar] = useState(false);
  const cart = useSelector((state) => state.cart);

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setBackgroundNavbar(true);
    } else {
      setBackgroundNavbar(false);
    }
  };
  useEffect(() => {
    changeBackground();
    window.addEventListener('scroll', changeBackground);
  }, [cart]);

  const handleClick = (e) => {
    e.preventDefault();
    settoggleSidebar(!toggleSidebar);
  };

  return (
    <header
      className={`relative top-0 md:fixed rounded-br-3xl rounded-bl-3xl  flex md:py-4 p-0 h-0 w-full rounded z-50 md:h-28 font-quicksand ${
        backgroundNavbar
          ? 'bg-gradient-to-r from-yellow-primary to-red-velvet'
          : 'bg-transparent'
      }`}
    >
      <div className='container flex justify-between items-center mx-auto py-8 relative'>
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
          <h1
            className={`font-bold text-2xl ${
              backgroundNavbar ? 'text-dark-primary' : 'text-yellow-primary'
            }`}
          >
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
                className='text-white md:text-dark-primary  hover:text-red-velvet active:text-red-velvet font-semibold transition-all ease-in delay-75 duration-300'
              >
                Home
              </Link>
            </li>
            <li className='block h-8 relative group' onClick={handleClick}>
              <span className='block container h-0.5 w-full  rounded-full bg-dark-primary absolute bottom-0 left-0 right-0 scale-x-0 group-hover:scale-x-100 transition-tansform ease-in duration-700 origin-left'></span>
              <Link
                to='/'
                className='text-white md:text-dark-primary  hover:text-red-velvet active:text-red-velvet font-semibold transition-all ease-in delay-75 duration-300'
              >
                Services
              </Link>
            </li>
            <li className='block h-8 relative group' onClick={handleClick}>
              <span className='block container h-0.5 w-full  rounded-full bg-dark-primary absolute bottom-0 left-0 right-0 scale-x-0 group-hover:scale-x-100 transition-tansform ease-in duration-700 origin-left'></span>
              <Link
                to='/'
                className='text-white md:text-dark-primary  hover:text-red-velvet active:text-red-velvet font-semibold transition-all ease-in delay-75 duration-300'
              >
                Products
              </Link>
            </li>
            <li className='block h-8 relative group' onClick={handleClick}>
              <span className='block container h-0.5 w-full  rounded-full bg-dark-primary absolute bottom-0 left-0 right-0 scale-x-0 group-hover:scale-x-100 transition-tansform ease-in duration-700 origin-left'></span>
              <Link
                to='/'
                className='text-white md:text-dark-primary  hover:text-red-velvet active:text-red-velvet font-semibold transition-all ease-in delay-75 duration-300'
              >
                Contact
              </Link>
            </li>
            <li>
              <div className='flex justify-between md:invisible h-16 flex-col items-center'>
                <Link
                  to='/cart'
                  className='text-white  hover:text-red-velvet active:text-red-velvet font-semibold transition-all ease-in delay-75 duration-300 relative p-2 mr-2'
                >
                  <AiOutlineShoppingCart size={32} />
                  <span className='rounded-full bg-yellow-primary text-sm text-dark-primary p-1 font-semibold absolute top-0 left-0'>
                    {cart.cartTotalQty}
                  </span>
                </Link>
                <button className='bg-gradient-to-r from-yellow-primary to-red-velvet transition-all ease-in duration-0 hover:duration-500 hover:bg-dark-primary  hover:text-white text-dark-secondary rounded-full py-2 px-8  font-semibold'>
                  Sign in
                </button>
              </div>
            </li>
          </ul>
        </nav>
        <div className='flex justify-between items-center invisible md:visible'>
          <Link
            to='/cart'
            className='text-dark-primary  hover:text-red-velvet active:text-red-velvet font-semibold transition-all ease-in delay-75 duration-300 relative p-2 mx-6'
          >
            <AiOutlineShoppingCart size={32} />
            <span className='rounded-full bg-yellow-primary text-sm text-dark-primary p-1 font-semibold absolute top-0 left-0'>
              {cart.cartTotalQty}
            </span>
          </Link>
          <button className='bg-gradient-to-r from-yellow-primary to-red-velvet transition-all ease-in duration-0 hover:duration-500 hover:bg-dark-primary  hover:text-white text-dark-secondary rounded-full py-2 px-8  font-semibold outline outline-2 outline-offset-0 outline-white'>
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
