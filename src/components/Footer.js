import React from "react";
import "./Footer.css"; // CSS dosyasını içe aktarıyoruz

const Footer = () => {
  return (
    <footer className="footer">
      {/* Logo (Soydan.png) */}
      <img src={require("../../src/Assets/Soydan.png")} alt="Logo" className="footer-logo" />

      {/* Telif Hakkı Yazısı */}
      <p>© {new Date().getFullYear()} Eğitim Platformu. Tüm hakları saklıdır.</p>
    </footer>
  );
};

export default Footer;
