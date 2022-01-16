import React from 'react';
import About from '../About/About';
import Property from '../Property/Property';
import TopSection from '../TopSection/TopSection';
import Features from '../Features/Features'
import Gallery from '../Gallery/Gallery';
import Inovation from '../Inovation/Inovation';
import OurTeam from '../OurTeam/OurTeam';
import Blog from '../Blog/Blog';
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <TopSection></TopSection>
            <About></About>
            <Property></Property>
            <Features></Features>
            <Gallery></Gallery>
            <Inovation></Inovation>
            <OurTeam></OurTeam>
            <Blog></Blog>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;