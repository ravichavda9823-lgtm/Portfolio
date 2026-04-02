import React, { useState, useEffect } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Normal Header */}
      <header className={`header d-flex max-width ${isSticky ? "hide" : ""}`}>
        <div className="logo">
          <img
            src="/images/logo.png"
            alt="Ravi Chavda Logo"
            className="logo-img"
          />
        </div>

        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          <i className="fa fa-bars"></i>
        </div>

        <ul className={`nav-links d-flex ${isOpen ? "show" : ""}`}>
          <li>
            <a href="#home" onClick={handleLinkClick}>Home</a>
          </li>
          <li>
            <a href="#about" onClick={handleLinkClick}>About</a>
          </li>
          <li>
            <a href="#project" onClick={handleLinkClick}>Project</a>
          </li>
          <li>
            <a href="#skill" onClick={handleLinkClick}>Skills</a>
          </li>
          <li>
            <a href="#contact" onClick={handleLinkClick}>Contact</a>
          </li>
        </ul>
      </header>

      {/* Sticky Header */}
      <header className={`sticky-header ${isSticky ? "show" : ""}`}>
        <div className="d-flex max-width">
          <div className="logo">
            <img
              src="/images/logo.png"
              alt="Ravi Chavda Logo"
              className="logo-img"
            />
          </div>

          <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
            <i className="fa fa-bars"></i>
          </div>

          <ul className={`nav-links d-flex ${isOpen ? "show" : ""}`}>
            <li>
              <a href="#home" onClick={handleLinkClick}>Home</a>
            </li>
            <li>
              <a href="#about" onClick={handleLinkClick}>About</a>
            </li>
            <li>
              <a href="#project" onClick={handleLinkClick}>Project</a>
            </li>
            <li>
              <a href="#skill" onClick={handleLinkClick}>Skills</a>
            </li>
            <li>
              <a href="#contact" onClick={handleLinkClick}>Contact</a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;