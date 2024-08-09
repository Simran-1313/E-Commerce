import Navbar from "../components/navBar/Navbar";
import Footer from "./footer/Footer";
import footerData from "../components/footer/footerData";
import Breadcrumb from "./Breadcrumb";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Layout = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    window.scroll(0,0)
  }, [location.pathname])
  
  return (
    <div className="bg-white mx-auto w-full">
      <Navbar />

      <div className="bg-white mx-auto min-h-[100vh] max-w-[1440px]">
      {(location.pathname === "/")? null :<Breadcrumb/>}
        {children}</div>
      <Footer footerData={footerData} />
    </div>
  );
};

export default Layout;
