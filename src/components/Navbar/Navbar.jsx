import React, { useRef, useState } from "react";
import "./Navbar.css";
import { FaTimes, FaBars } from "react-icons/fa";
import { useToast } from '../../components/Toast/Toast'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const navbg = () => {
    if (window.scrollY >= 90) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", navbg);

  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };

  const { info } = useToast();

  const handleBlogClick = (e) => {
    e.preventDefault();
    info("Blog is coming soon! 🚀");
  };

  return (
    <header className={nav && "header-bg"}>
      <p>
        Mohammed <span>Rimshan.</span>
      </p>
      <nav ref={navRef}>
        <a href="#Banner">Home</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#Experience">Experience</a>
        <a href="#about">About</a>
        <a href="#Skills">Skills</a>
        <a href="#Contact">Contact me</a>
        <a href="#blog" onClick={handleBlogClick}>
          Blog
        </a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes className="icons times" />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars className="icons bars" />
      </button>
    </header>
  );
};

export default Navbar;
