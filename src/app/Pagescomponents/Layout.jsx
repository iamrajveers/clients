"use client";
import { useEffect, useState } from "react";
import Footer from "../ShareComponents/Footer";
import Navbar from "../ShareComponents/Navbar";





const ClientLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <section>{children}</section>
      <Footer />
    </>
  );
};

export default ClientLayout;
