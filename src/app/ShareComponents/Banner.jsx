"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Banner = ({
  imageSrc,
  altText = "Banner image",
  title,
  subtitle,
  showBreadcrumbs = true,
  breadcrumbs = [],
  overlayOpacity = 40, // 0-100
  height = "40vh",
  minHeight = "300px",
  textAlign = "left"
}) => {
  return (
    <section 
      className={`relative w-full`}
      style={{ height, minHeight }}
    >

      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={altText}
          fill
          className="object-cover"
          priority
        />
        {/* Dynamic overlay */}
       

      </div>

      {/* Content */}
      <div className={`relative z-10 h-full flex flex-col items-${textAlign} justify-center px-30  text-[#212025]`}>
        <div className={`max-w-4xl mx-${textAlign === 'center' ? 'auto' : '0'}`}>
          <h1 className="text-2xl md:text-4xl ">{title}</h1>
          {subtitle && (
            <p className="text-xl md:text-2xl mt-2">
              {subtitle}
            </p>
          )}
        </div>
        
        {/* Optional Breadcrumbs */}
        
        {/* {showBreadcrumbs && (
          <div className="absolute bottom-8 left-1/2 transform translate-x-1/2">
            <nav className="space-x-2  text-white/80">
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <span>/</span>}
                  {crumb.href ? (
                    <Link 
                      href={crumb.href} 
                      className="hover:text-white transition"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white">{crumb.label}</span>
                  )}
                </React.Fragment>
              ))}
            </nav>
          </div>
        )} */}
        
      </div>
    </section>
  );
};

export default Banner;