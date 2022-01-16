import React from 'react';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import Banner from '../Banner/Banner';
import './TopSection.css'

const TopSection = () => {
    return (
        <div className='banner-img' style={{backgroundColor:'rgb(239,239,237)'}}>
            <NavigationBar></NavigationBar>
            <Banner></Banner>
        </div>
    );
};

export default TopSection;