import React, { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="d-flex max-width header">
      <div className="logo">
        <h2>
          <span className="fa fa-code"></span>
          <span className="r">R</span> <span className="dev">dev</span> Stack
        </h2>
      </div>
      

      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        <i className="fa fa-bars"></i>
      </div>

      <ul className={`nav-links d-flex ${isOpen ? "show" : ""}`}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Project</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </header>
  );
}
export default Header;
