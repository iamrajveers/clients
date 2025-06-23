"use client";
import React, { useEffect, useState } from 'react';
import Herosection from '../components/Herosection';
import Aboutsection from '../components/Aboutsection';
import TabSection from '../components/TabSection';
import Bookatablesection from '../components/Bookatablesection';
import Ourservicessection from '../components/Ourservicessection';
import AboutOurRestaurant from '../components/AboutOurRestaurant';
import BlogSection from '../components/BlogSection';
import AboutResturentSection from '../components/AboutResturentSection';
import Loader from '../ShareComponents/Loader';

const Home = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Loader loading={isLoading}>
            <Herosection />
            <Aboutsection />
            <TabSection />
            <AboutOurRestaurant />
            <Bookatablesection />
            <Ourservicessection />
            <AboutResturentSection />
            <BlogSection />
        </Loader>
    );
};


export default Home;
