import React from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Special from '../components/Special';
import { useGetAllProductsQuery } from '../redux/productsApi';

const Home = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  console.log(data);
  console.log(error);
  console.log(isLoading);
  return (
    <>
      <Navbar />
      <Hero />
      <Special />
      <Footer />
    </>
  );
};

export default Home;
