import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Yönlendirme için useNavigate eklendi
import { FaFacebookF, FaInstagram, FaPhone } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate(); // Yönlendirme fonksiyonunu kullan

  return (
    <header className="navbar">
      {/* Sol Taraf - Logo */}
      <div className="navbar-left">
        <img src={require('../../Assets/Soydan.png')} alt="Logo" className="logo" />
      </div>

      {/* Menü */}
      <nav className="navbar-center">
        <ul>
          <li><Link to="#">Bizi Tanıyın <span className="arrow-down">▼</span></Link></li>
          <li><Link to="#">Ürünler <span className="arrow-down">▼</span></Link></li>
          <li><Link to="#">Servisler <span className="arrow-down">▼</span></Link></li>
          <li><Link to="#">Çözümler <span className="arrow-down">▼</span></Link></li>
          <li><Link to="#">Kaynaklar <span className="arrow-down">▼</span></Link></li>
          <li><Link to="#">Bize Ulaşın</Link></li>
        </ul>

        {/* Alt Menü - Soydan Kampüs */}
        <div className="sub-menu">
          <Link to="#">📘 Soydan Nedir?</Link>
          <Link to="#">📌 Sınıflarda Neler Var?</Link>
          <Link to="#">🔗 Nasıl Üye Olunur?</Link>
        </div>
      </nav>

      {/* Sağ Taraf */}
      <div className="navbar-right">
        {/* Üye Giriş ve Üye Ol Butonları Yanyana */}
        <div className="user-actions">
          <button className="login-btn">Üye Girişi</button>
          <button className="register-btn" onClick={() => navigate("/LoginPage")}>
            HEMEN ÜYE OL
          </button>
        </div>

        {/* Sosyal Medya ve Telefon ALTA */}
        <div className="social-contact">
          <div className="social-media">
            <FaFacebookF className="social-icon" />
            <FaInstagram className="social-icon" />
          </div>
          <div className="contact-info">
            <FaPhone className="phone-icon" />
            <span className="phone-number">444 94 95</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
