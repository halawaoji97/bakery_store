import React from 'react';
import { Link } from 'react-router-dom';
import HeroImg from '../assets/img/hero-image2.png';
// import HeroImg from '../assets/images/heroImage.png';
import HeroPattern from '../assets/images/heroBg.svg';

const Hero = () => {
  return (
    <section
      className='py-16 md:py-32  h-full tracking-wide font-quicksand sm:bg-transparent'
      style={{
        backgroundImage: `url(${HeroPattern})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 justify-center md:justify-between items-center py-10'>
        <div className='bg-yellow-primary  mx-auto order-1 hover:bg-grey-primary rounded-full w-60 h-60 md:w-80 md:h-80  lg:h-96 lg:w-96 '>
          <img src={HeroImg} alt='Tart' className='p-2' />
        </div>
        <div className='text-center md:text-left py-7 md:px-16'>
          <h1 className='text-4xl md:text-5xl py-4 font-bold text-white md:text-dark-primary'>
            Get cheaper prices, and quality taste
          </h1>

          <span className=' font-normal text-md  tracking-widest text-red-velvet'>
            BREAD | CAKE | TART | PASTRY | DESSERT
          </span>

          <p className='py-6 text-white md:text-dark-secondary font-normal leading-relaxed md:text-xl'>
            Complete your event celebration <br /> with our breads, cakes and
            many more.
          </p>

          <div className='mt-12 md:mt-16'>
            <button className='bg-gradient-to-r from-yellow-primary to-red-velvet transition-all ease-in duration-0 hover:duration-500 hover:bg-dark-primary  hover:text-white text-dark-secondary rounded-full py-3 px-12  font-bold'>
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
