import React from 'react';
import Products from '../../Products/Products';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner />
            <Products />
            <Reviews />
            {/* extra section here */}
            <Footer />
        </div>
    );
};

export default Home;