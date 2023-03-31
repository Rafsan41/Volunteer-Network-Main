import React from 'react';
import Header from '../../../SharedComponant/Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import VolenterService from '../VolenterService/VolenterService';

const Home = () => {
    return (
        <div>

            <Header />
            <SearchBar />
            <VolenterService />
        </div>
    );
};

export default Home;