import React from 'react';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
import Logo from './Logo/Logo';
import Products from './Products/Products';

const Home = () => {
    return (
        <div>
            <Logo></Logo>
            <Banner></Banner>
            <Products></Products>
            <Footer></Footer>
        </div>
    );
};

export default Home;