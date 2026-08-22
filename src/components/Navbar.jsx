import { useEffect, useState } from "react";
import profile from "../data/profile";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  /* ========================================
     SCROLL STATE
  ======================================== */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ========================================
     ACTIVE SECTION
  ======================================== */

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(
            visibleSections[0].target.id
          );
        }
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  /* ========================================
     MOBILE MENU
  ======================================== */

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`navbar ${isScrolled ? "navbar-scrolled" : ""
        }`}
    >
      <div className="navbar-container">

        {/* Logo */}
        <a
          href="#home"
          className="navbar-logo"
          onClick={closeMenu}
        >
          {profile.name}<span>.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);

            return (
              <a
                key={link.name}
                href={link.href}
                className={
                  activeSection === sectionId
                    ? "active"
                    : ""
                }
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Resume */}
        <a
          href="/resume.pdf"
          className="navbar-resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>

        {/* Mobile Button */}
        <button
          className={`mobile-menu-button ${isMenuOpen ? "open" : ""
            }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={
            isMenuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`mobile-nav ${isMenuOpen ? "mobile-nav-open" : ""
          }`}
      >
        {navLinks.map((link) => {
          const sectionId = link.href.substring(1);

          return (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className={
                activeSection === sectionId
                  ? "active"
                  : ""
              }
            >
              {link.name}
            </a>
          );
        })}

        <a
          href="/resume.pdf"
          className="mobile-resume"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          View Resume
        </a>
      </div>
    </header>
  );
}

export default Navbar;