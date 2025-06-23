"use client";
import React, { useState } from 'react';
import Banner from '../ShareComponents/Banner';
import AboutImg from "../../../public/hero2.png";
import AboutOurRestaurant from '../components/AboutOurRestaurant';
import Bookatablesection from '../components/Bookatablesection';
import Aboutsection from '../components/Aboutsection';
import Ourservicessection from '../components/Ourservicessection';
import Loader from '../ShareComponents/Loader';

const About = () => {
 
    const [isLoading, setIsLoading] = useState(false); 

  return (

    <Loader loading={isLoading}>

      <Banner imageSrc={AboutImg} title="About US" />

      <AboutOurRestaurant />

      <Bookatablesection />

      <Aboutsection />

      <Ourservicessection />


     </Loader>

  )
}

export default About