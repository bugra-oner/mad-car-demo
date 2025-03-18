import { useState } from "react";
import { Link } from "react-router-dom";
import reactLogo from "../Header/test.svg";
import "./Header.css"; // Stil dosyamız

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <img src={reactLogo} alt="React Logo" />
      </div>

      {/* Hamburger Menüyü Aç/Kapat */}
      {/* <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button> */}

      <nav className={isOpen ? "nav open" : "nav"}>
        <ul>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={() => setIsOpen(false)}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
