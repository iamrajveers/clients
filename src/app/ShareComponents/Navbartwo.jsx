"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiShoppingCart, FiUser } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png";

const menus = [
  { label: "Home", href: "/" },
  { label: "About", href: "/aboutus" },
  { label: "Shop", href: "/shop" }, 
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

const Navbartwo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [cartItems] = useState(3); // Example cart item count

  return (
    <>
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
        <div className="hidden md:flex items-center space-x-12">
          <ul className="flex space-x-12 text-[16px] font-medium">
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

          {/* User and Cart Icons */}
          <div className="flex items-center space-x-6">
            <Link 
              href="/signup" 
              className="flex items-center gap-2 text-[#212025] hover:text-[#FB5704] transition-colors"
            >
              <FiUser className="text-xl" />
              <span className="font-medium">Sign Up</span>
            </Link>
            
            <Link 
              href="/cart" 
              className="relative flex items-center gap-2 text-[#212025] hover:text-[#FB5704] transition-colors"
            >
              <FiShoppingCart className="text-xl" />
              <span className="font-medium">Cart</span>
              {cartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#FB5704] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <Link href="/cart" className="relative">
            <FiShoppingCart className="text-xl" />
            {cartItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#FB5704] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
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
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 pt-20 px-6 flex flex-col overflow-y-auto">
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

          {/* Mobile Sign Up and Cart Links */}
          <div className="mt-8 space-y-4">
            <Link
              href="/signup"
              className="block bg-[#FB5704] text-white px-6 py-3 rounded-md hover:bg-[#e24d00] transition-colors text-center"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </Link>
            
            <Link
              href="/cart"
              className=" border border-[#FB5704] text-[#FB5704] px-6 py-3 rounded-md hover:bg-[#FB5704] hover:text-white transition-colors text-center flex items-center justify-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <FiShoppingCart />
              View Cart ({cartItems})
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbartwo;