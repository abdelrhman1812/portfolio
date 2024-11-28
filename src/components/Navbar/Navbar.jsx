import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const navRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "timeline", label: "Experience" },
    // { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    gsap
      .timeline()
      .from(navRef.current, {
        opacity: 0,
        scaleX: 0.5,
        delay: 0.5,
        duration: 0.5,
        ease: "power3.out",
      })
      .to(navRef.current, {
        opacity: 1,
        delay: 0.5,
        scaleX: 1,
        duration: 0.5,
        ease: "power3.out",
      });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar position-fixed top-0 end-0 w-100 " ref={navRef}>
      <div className="container ">
        <div className="navbar-content w-100 d-flex justify-content-between align-items-center">
          <a href="#home" className="logo">
            <ScrollLink
              to="home"
              spy={true}
              smooth={true}
              delay={0.5}
              duration={500}
            >
              <span className="highlight">A</span>bdelrhman
            </ScrollLink>
          </a>
          <div
            className={`nav-links d-flex gap-3 ${isMenuOpen ? "active" : ""}  `}
          >
            {/* links */}
            {navItems.map((item) => (
              <ScrollLink
                to={item.id}
                spy={true}
                smooth={true}
                delay={0.5}
                duration={500}
                key={item.id}
                className="nav-link"
              >
                {item.label}
              </ScrollLink>
            ))}
          </div>
          <div className="menu-icon " onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
