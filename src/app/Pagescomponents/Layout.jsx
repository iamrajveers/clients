"use client";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import Footer from "../ShareComponents/Footer";
import Navbartwo from "../ShareComponents/Navbar";

const ClientLayout = ({ children }) => {
  const pathname = usePathname();
  const hideRoutes = ["/auth/login", "/auth/signup", "/auth/forgot-password"];
  const shouldHideLayout = useMemo(() => hideRoutes.includes(pathname), [pathname]);

  return (
    <>

      {!shouldHideLayout && <Navbartwo/>}

      <section>{children}</section>

      {!shouldHideLayout && <Footer />}

    </>
  );
};

export default ClientLayout;
