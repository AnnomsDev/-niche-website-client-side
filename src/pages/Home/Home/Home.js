import React from 'react';
import Products from '../../Products/Products';
import Navigation from '../../shared/Navigation/Navigation';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Products />
        </div>
    );
};

export default Home;