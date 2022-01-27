import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-grey-secondary'>
      <div className='container mx-auto py-12 px-8 md:px-0'>
        <div className='grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 gap-8'>
          <div className=''>
            <Link to='/'>
              <h1 className='text-yellow-primary font-bold text-2xl pb-4'>
                Bakery Store
              </h1>
            </Link>
            <p className='text-dark-secondary'>
              We prioritize your satisfaction <br /> both in terms of product &
              service.
            </p>
          </div>
          <div>
            <h5 className='text-dark-primary font-medium text-xl'>Our Store</h5>
            <ul className='my-4 text-dark-secondary'>
              <li className='list-group-item'>
                <Link to='/store-kelapa-gading'>
                  Kelapa Gading, Jakarta Utara
                </Link>
              </li>
              <li className='list-group-item'>
                <Link to='/store-Bandung'>Bandung, Jawa Barat</Link>
              </li>
              <li className='list-group-item'>
                <Link to='/store-thamrin-city'>
                  Thamrin City, Jakarta Pusat
                </Link>
              </li>
              <li className='list-group-item'>
                <Link to='/store-sunter'>Sunter, Jakarta Utara</Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className='text-dark-primary font-medium text-xl'>
              Explore Us
            </h5>
            <ul className='my-4 text-dark-secondary'>
              <li className='list-group-item'>
                <Link to='/developer'>Developer</Link>
              </li>
              <li className='list-group-item'>
                <Link to='/career'>Career</Link>
              </li>
              <li className='list-group-item'>
                <Link to='/terms'>Terms & Conditions</Link>
              </li>
              <li className='list-group-item'>
                <Link to='/privaacy'>Privacy policy</Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className='text-dark-primary font-medium text-xl'>
              Contact Us
            </h5>
            <ul className='my-4 text-dark-secondary'>
              <li className='list-group-item'>
                <Link to='/mailto:ojibakery@.co.id'>ojibakery@.co.id</Link>
              </li>
              <li className='list-group-item'>
                <Link to='/tel:+622122081996'>021 - 2208 - 1996</Link>
              </li>
              <li className='list-group-item'>
                <span>Ojibakery, Kemang, Jakarta</span>
              </li>
            </ul>
          </div>
        </div>
        <div className='mt-12'>
          <div className='text-dark-secondary text-center'>
            Copyright 2020 | All Rights Reserved | Oji Bakery
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
