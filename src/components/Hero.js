import React from 'react';
import HeroImg from '../assets/images/image-removebg-preview (1) 1 (1).png';

const Hero = () => {
  const scroll = () => {
    const section = document.querySelector('#specialProduct');
    section.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };

  return (
    <section className='py-16 md:py-32 h-full tracking-wide font-quicksand'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 justify-center md:justify-between items-center py-10'>
        <div className='  mx-auto order-1'>
          <img src={HeroImg} alt='Birhtday Cake' className='p-2' />
        </div>
        <div className='text-center md:text-left py-7 md:px-16'>
          <h1 className='text-4xl md:text-5xl py-4 font-bold text-dark-primary'>
            Get cheaper prices, and quality taste
          </h1>

          <span className=' font-medium text-md  tracking-widest text-red-velvet'>
            BREAD | CAKE | TART | PASTRY | DESSERT
          </span>

          <p className='py-6 text-white md:text-dark-secondary font-medium leading-relaxed md:text-xl'>
            Complete your event celebration <br /> with our breads, cakes and
            many more.
          </p>

          <div className='mt-12 md:mt-16'>
            <button
              className='bg-gradient-to-r from-yellow-primary to-red-velvet transition-all ease-in duration-0 hover:duration-500 hover:bg-dark-primary  hover:text-white text-dark-secondary rounded-full py-3 px-12  font-semibold'
              onClick={scroll}
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
