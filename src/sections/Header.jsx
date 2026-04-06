import { useState } from "react";
import "../styles/header.css";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  

  return (
    <header className="header">
      <div className="logo">
        Emilly
      </div>
        <nav className={menuOpen ? "nav active" : "nav"}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>Sobre mim</Link>
          <Link to="/tattos" onClick={() => setMenuOpen(false)}>Tattos</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contato</Link>
        </nav>
      {/* botão mobile */}
      <div
        className={menuOpen ? "menu-toggle active" : "menu-toggle"}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}