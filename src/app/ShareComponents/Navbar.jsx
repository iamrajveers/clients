"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();


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
                  className={`relative px-5 py-[10px] rounded-[4px] transition-all duration-300 ${pathname === menu.href
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
                          className={`block px-4 py-2 text-sm rounded-md transition-all duration-200 ${pathname === child.href
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

          {/* Desktop Order Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="relative px-8 py-3 rounded-md overflow-hidden group border border-[#FB5704] hover:border-[#FB5704] transition-all duration-300 hover:cursor-pointer"
          >
            <span className="absolute inset-0 bg-[#FB5704] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative z-10 flex items-center gap-2">
              <span className="text-[#FB5704] group-hover:text-white transition-colors duration-300 font-medium">
                Order Online
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#FB5704] group-hover:text-white transition-transform duration-300 group-hover:translate-x-1"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
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
          <div className="space-y-6">
            {menus.map((menu, i) => (
              <div key={i} className="border-b border-gray-100 pb-2">
                <Link
                  href={menu.href}
                  className={`block py-3 px-4 rounded-md text-lg font-medium transition-colors ${pathname === menu.href
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
                        className={`block py-2 px-4 text-base rounded-md transition-colors ${pathname === child.href
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

          {/* Mobile Order Button */}

          <button
            className="mt-8 bg-[#FB5704] text-white px-6 py-3 rounded-md hover:bg-[#e24d00] transition-colors self-center flex items-center gap-2 justify-center  hover:cursor-pointer"
            onClick={() => {
              setIsModalOpen(true);
              setIsOpen(false);
            }}
          >
            Order Online
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:translate-x-1 transition-transform"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>

        </div>
      )}


    </>
  );
};

export default Navbar;





