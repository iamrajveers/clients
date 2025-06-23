'use client';
import React from 'react';
import { FaCalendarAlt, FaCommentAlt, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import Blog1Img1 from '../../../public/blog1.png';
import Blog1Img2 from '../../../public/blog2.png';
import Blog1Img3 from '../../../public/blog3.png';
import Link from 'next/link';

const BlogSection = ({ showButton = true }) => {

  const blogPosts = [
    {
      id: 1,
      title: 'Mastering the Art of French Cuisine',
      excerpt: 'Discover the secrets behind classic French techniques that every chef should know.',
      date: 'June 22, 2023',
      comments: 14,
      image: Blog1Img1,
      category: 'Culinary Arts',
    },
    {
      id: 2,
      title: 'Organic Farming: From Soil to Plate',
      excerpt: 'How sustainable farming practices are revolutionizing restaurant ingredients.',
      date: 'June 15, 2023',
      comments: 8,
      image: Blog1Img2,
      category: 'Sustainability',
    },
    {
      id: 3,
      title: 'Wine Pairing Perfection',
      excerpt: 'Sommelier-approved wine selections to complement your signature dishes.',
      date: 'June 8, 2023',
      comments: 23,
      image: Blog1Img3,
      category: 'Beverage',
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-[#fefefe]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-[#FB5704]/10 text-[#FB5704] rounded-full text-sm font-semibold mb-4">
            Latest Articles
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FB5704] to-[#ff8c00] mb-4">
            Our Recent News
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Stay updated with the freshest trends, kitchen stories, and gourmet secrets from top chefs.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  href=""
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute top-4 left-4 bg-white text-[#FB5704] px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                  {post.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <span className="flex items-center mr-5">
                    <FaCalendarAlt className="mr-2 text-[#FB5704]" />
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <FaCommentAlt className="mr-2 text-[#FB5704]" />
                    {post.comments} Comments
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#212025] mb-3 hover:text-[#FB5704] transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-6">{post.excerpt}</p>



                <Link

                  href={`/blog/blogdetails/${post.id}`}

                  className="inline-flex items-center text-[#FB5704] font-medium relative group"
                >
                  Read More
                  <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FB5704] transition-all group-hover:w-full"></span>
                </Link>




              </div>

            </article>
          ))}
        </div>


        {/* CTA Button - Show only if showButton is true */}

{showButton && (
  <div className="text-center mt-16">
    <Link href="/blog">
      <button className="relative inline-flex items-center px-8 py-4 overflow-hidden font-semibold text-white bg-[#FB5704] rounded-full group cursor-pointer">
        <span className="absolute inset-0 w-full h-full transition-transform duration-1000 transform translate-x-full bg-white opacity-10 group-hover:-translate-x-0"></span>
        <span className="relative z-10 flex items-center">
          Explore All Articles
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>
      </button>
    </Link>
  </div>
)}




      


      </div>
    </section>
  );
};

export default BlogSection;
