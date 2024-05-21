import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router";
import { useEffect } from "react";

const GeneralLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("auth-token");
    if (!token) {
      navigate("/login");
    }
  }, []);
  
  return (
    <div className="max-w-[1140px] mx-auto">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default GeneralLayout;
