'use client';
import React, { useState } from 'react';
import { useParams, usePathname } from 'next/navigation';
import Image from 'next/image';
import {
  FaCalendarAlt,
  FaCommentAlt,
  FaShareAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaLink,
} from 'react-icons/fa';

// Dummy blog data (you can replace this with API call)

const blogData = [
  {
    id: 1,
    title: 'Mastering the Art of French Cuisine',
    content: `
      <p>French cuisine is renowned worldwide...</p>
      <h3>The Five Mother Sauces</h3>
      <ul>
        <li><strong>Béchamel:</strong> A white sauce made from milk and roux</li>
        <li><strong>Velouté:</strong> A light stock-based sauce thickened with roux</li>
      </ul>`,
    date: 'June 22, 2023',
    comments: 14,
    image: '/blog1.png',
    category: 'Culinary Arts',
    author: {
      name: 'Chef Marie Dubois',
      avatar: '/chef-avatar.jpg',
      bio: 'Head Chef at Le Cordon Bleu...',
    },
  },

  {
    id: 2,
    title: 'Exploring Italian Pasta Varieties',
    content: `<p>Italy offers hundreds of pasta types...</p>`,
    date: 'July 5, 2023',
    comments: 8,
    image: '/blog2.png',
    category: 'Italian Cuisine',
    author: {
      name: 'Chef Antonio Rossi',
      avatar: '/chef-avatar2.jpg',
      bio: 'Italian food expert and pasta master.',
    },
  },
];


const Blogdetails = () => {
  const { id } = useParams();
  const pathname = usePathname();
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [copied, setCopied] = useState(false);

  const blogPost = blogData.find((post) => post.id === parseInt(id));

  if (!blogPost) {
    return (
      <div className="text-center py-20 text-gray-500">
        <h2 className="text-2xl font-bold">Blog not found</h2>
      </div>
    );
  }

  
  const shareUrl = `${typeof window !== 'undefined' ? window.location.origin : ''}${pathname}`;

  const handleShare = (platform) => {
    const title = encodeURIComponent(blogPost.title);
    const url = encodeURIComponent(shareUrl);
    let shareLink = '';

    switch (platform) {
      case 'facebook':
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'twitter':
        shareLink = `https://twitter.com/intent/tweet?text=${title}&url=${url}`;
        break;
      case 'linkedin':
        shareLink = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`;
        break;
    }

    if (shareLink) {
      window.open(shareLink, '_blank', 'noopener,noreferrer');
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-[#fefefe]">
      <div className="max-w-4xl mx-auto">
        {/* Category and Title */}
        <div className="mb-12 text-center">
          <span className="inline-block px-4 py-1 bg-[#FB5704]/10 text-[#FB5704] rounded-full text-sm font-semibold mb-4">
            {blogPost.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#212025] mb-6">
            {blogPost.title}
          </h1>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-gray-600 mb-8">
            <div className="flex items-center">
              <Image
                src={blogPost.author.avatar}
                alt={blogPost.author.name}
                width={40}
                height={40}
                className="rounded-full mr-3"
              />
              <span>{blogPost.author.name}</span>
            </div>
            <div className="flex items-center">
              <FaCalendarAlt className="mr-2 text-[#FB5704]" />
              {blogPost.date}
            </div>
            <div className="flex items-center">
              <FaCommentAlt className="mr-2 text-[#FB5704]" />
              {blogPost.comments} Comments
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
          <Image
            src={blogPost.image}
            alt={blogPost.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <article
          className="prose lg:prose-xl max-w-none mb-16"
          dangerouslySetInnerHTML={{ __html: blogPost.content }}
        />

        {/* Share Section */}
        <div className="border-t border-b border-gray-200 py-8 mb-12">
          <div className="flex justify-between items-center flex-wrap gap-6">
            <div className="flex flex-wrap gap-2">
              {['French Cuisine', 'Cooking Techniques', 'Chef Skills'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="relative">
              <button
                onClick={() => setShowShareOptions(!showShareOptions)}
                className="flex items-center px-4 py-2 bg-[#FB5704]/10 text-[#FB5704] rounded-full hover:bg-[#FB5704]/20 transition-colors"
              >
                <FaShareAlt className="mr-2" />
                Share Article
              </button>

              {showShareOptions && (
                <div className="absolute right-0 bottom-full mb-2 bg-white shadow-lg rounded-lg p-3 z-10">
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleShare('facebook')}
                      className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200"
                    >
                      <FaFacebook size={18} />
                    </button>
                    <button
                      onClick={() => handleShare('twitter')}
                      className="p-2 bg-blue-100 text-blue-400 rounded-full hover:bg-blue-200"
                    >
                      <FaTwitter size={18} />
                    </button>
                    <button
                      onClick={() => handleShare('linkedin')}
                      className="p-2 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200"
                    >
                      <FaLinkedin size={18} />
                    </button>
                    <button
                      onClick={copyToClipboard}
                      className="p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 relative"
                    >
                      <FaLink size={18} />
                      {copied && (
                        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded">
                          Link copied!
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Author Bio & Comments - use your existing layout here */}
      </div>
    </section>
  );
};

export default Blogdetails;
