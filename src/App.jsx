import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import HomePage from "./pages/HomePage/HomePage";
import AboutUsPage from "./pages/AboutUs/AboutUsPage";
import Services from "./pages/Services/Services";
import Projects from "./pages/Projects/Projects";
import TechStackPage from "./pages/TechPage/TechStackPage";
import CareersPage from "./pages/CareersPage/CareersPage";
import ContactUs from "./pages/ContactUs/ContactUs";


export default function App() {
  const [showNavBar, setShowNavBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      // If scrolling down and past a certain threshold, hide the NavBar
      setShowNavBar(false);
    } else {
      // If scrolling up, show the NavBar
      setShowNavBar(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <BrowserRouter>
      <div className={`fixed top-0 w-full z-50 transition-transform duration-300 ${showNavBar ? "translate-y-0" : "-translate-y-full"}`}>
        <Nav />
      </div>
      <div className="mt-20">
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/Aboutus" element={<AboutUsPage /> } />
          <Route path="/Services" element={<Services />} /> 
          <Route path="/Projects" element={<Projects /> } />
          <Route path="/TechStack" element={<TechStackPage /> } />
          <Route path="/Careers" element={<CareersPage /> } />
          <Route path="/ContactUs" element={<ContactUs /> } />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}