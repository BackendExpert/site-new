import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import HomePage from "./pages/HomePage/HomePage";


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
      <div className="mt-16">
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}