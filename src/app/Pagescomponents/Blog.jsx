import React from 'react'
import Banner from '../ShareComponents/Banner';
import AboutImg from "../../../public/hero2.png";
import BlogSection from '../components/BlogSection';
const Blog = () => {
  return (
    <>
      <Banner imageSrc={AboutImg} title="Blog" />

      <BlogSection showButton={false} />

    </>


  )
}

export default Blog