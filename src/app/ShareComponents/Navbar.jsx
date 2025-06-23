"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiShoppingCart, FiUser, FiSearch, FiMail, FiPhone } from "react-icons/fi";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png";
import OrderModal from "./OrderModal";

const menus = [
  { label: "Home", href: "/" },
  { label: "About", href: "/aboutus" },
  { label: "Menu", href: "/menu" },
  {
    label: "Blog",
    href: "/blog",
    children: [
      { label: "Blog Details", href: "/blog/blogdetails" },
      { label: "Elements", href: "/blog/elements" },
    ],
  },
  { label: "Contact", href: "/contactus" },
];

const socialIcons = [
  { icon: <FaFacebook className="text-lg" />, href: "#" },
  { icon: <FaTwitter className="text-lg" />, href: "#" },
  { icon: <FaInstagram className="text-lg" />, href: "#" },
  { icon: <FaYoutube className="text-lg" />, href: "#" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();
  const [cartItems] = useState(3);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#FB5704] text-white text-sm py-2 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Contact Info */}
          <div className="flex items-center space-x-4">
            <a href="mailto:info@example.com" className="flex items-center hover:text-gray-200">
              <FiMail className="mr-1" />
              <span>info@example.com</span>
            </a>
            <a href="tel:+1234567890" className="flex items-center hover:text-gray-200">
              <FiPhone className="mr-1" />
              <span>+1 (234) 567-890</span>
            </a>
          </div>
          
          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            {socialIcons.map((social, index) => (
              <Link 
                key={index} 
                href={social.href} 
                className="hover:text-gray-200 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="sticky top-0 z-50 bg-[#F8F8F8] px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="h-auto sm:ml-8">
          <Link href="/">
            <Image
              src={logo}
              alt="Logo"
              width={110}
              height={30}
              className="hover:opacity-90 transition-opacity"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8 text-[16px] font-medium">
            {menus.map((menu, i) => (
              <li key={i} className="relative group">
                <Link
                  href={menu.href}
                  className={`relative px-5 py-[10px] rounded-[4px] transition-all duration-300 ${
                    pathname === menu.href
                      ? "bg-[#FB5704] text-white font-semibold "
                      : "text-[#212025] hover:bg-[#FB5704] hover:text-white "
                  }`}
                >
                  {menu.label}
                </Link>

                {/* Submenu */}
                {menu.children && (
                  <ul className="absolute left-0 mt-3 w-50 bg-white shadow-lg rounded-[4px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10 border border-gray-100">
                    {menu.children.map((child, j) => (
                      <li key={j}>
                        <Link
                          href={child.href}
                          className={`block px-4 py-2 text-sm rounded-md transition-all duration-200 ${
                            pathname === child.href
                              ? "bg-[#FB5704] text-white font-semibold"
                              : "text-gray-700 hover:bg-[#FB5704] hover:text-white"
                          }`}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Search Bar */}
          <div className="relative ml-4">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FB5704] focus:border-transparent w-48"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FiSearch className="absolute left-3 top-3 text-gray-400" />
          </div>

          {/* Icons Section */}
          <div className="flex items-center space-x-6 ml-4">
            {/* Cart Icon with Badge */}
            <Link href="/cart" className="relative p-2 group">
              <FiShoppingCart className="text-2xl text-[#212025] group-hover:text-[#FB5704] transition-colors" />
              {cartItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#FB5704] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </Link>

            {/* User/Signup Icon */}
            <Link href="/auth/signup" className="p-2 group">
              <FiUser className="text-2xl text-[#212025] group-hover:text-[#FB5704] transition-colors" />
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Mobile Search Icon (opens search on click) */}
          <button className="p-2" onClick={() => setIsOpen(false)}>
            <FiSearch className="text-xl" />
          </button>
          
          {/* Mobile Cart Icon */}
          <Link href="/cart" className="relative p-2">
            <FiShoppingCart className="text-2xl text-[#212025]" />
            {cartItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#FB5704] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartItems}
              </span>
            )}
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 focus:outline-none"
            aria-label="Menu"
          >
            {isOpen ? (
              <FiX className="text-2xl text-[#FB5704]" />
            ) : (
              <FiMenu className="text-2xl" />
            )}
          </button>
        </div>

        {/* Order Modal */}
        <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 pt-20 px-6 flex flex-col overflow-y-auto">
          {/* Mobile Search Bar */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FB5704] focus:border-transparent w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FiSearch className="absolute left-3 top-3 text-gray-400" />
          </div>

          <div className="space-y-6">
            {menus.map((menu, i) => (
              <div key={i} className="border-b border-gray-100 pb-2">
                <Link
                  href={menu.href}
                  className={`block py-3 px-4 rounded-md text-lg font-medium transition-colors ${
                    pathname === menu.href
                      ? "bg-[#FB5704] text-white font-semibold shadow"
                      : "text-gray-700 hover:bg-[#FB5704] hover:text-white"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {menu.label}
                </Link>

                {/* Mobile submenu */}
                {menu.children && (
                  <div className="ml-4 mt-1 space-y-3">
                    {menu.children.map((child, j) => (
                      <Link
                        key={j}
                        href={child.href}
                        className={`block py-2 px-4 text-base rounded-md transition-colors ${
                          pathname === child.href
                            ? "bg-[#FB5704] text-white font-semibold"
                            : "text-gray-600 hover:bg-[#FB5704] hover:text-white"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Auth Links */}
          <div className="mt-6 flex space-x-4 justify-center">
            <Link
              href="/auth/signup"
              className="flex items-center justify-center p-3 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <FiUser className="text-xl mr-2" />
              <span>Sign In</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;