import React from 'react';
import Products from '../../Products/Products';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner />
            <Products />
            <Reviews />
        </div>
    );
};

export default Home;