import React from "react";
import "./HomeContact.css"; // CSS dosyasını içe aktarıyoruz

const HomeContact = () => {
  return (
    <div className="contact-container">
      {/* Form Alanı */}
      <div className="contact-form">
        <h2>Hemen bize ulaşın!</h2>

        <div className="input-group">
          <input type="text" placeholder="Adınız" aria-label="Adınız" />
          <input type="text" placeholder="Soyadınız" aria-label="Soyadınız" />
        </div>

        <input type="email" placeholder="E-Posta Adresiniz" aria-label="E-Posta Adresiniz" />
        <input type="text" placeholder="Kurum Adı" aria-label="Kurum Adı" />
        <input type="tel" placeholder="Telefon Numaranız" aria-label="Telefon Numaranız" />

        <button className="submit-btn">Gönder</button>

        {/* Aydınlatma Metni */}
        <div className="privacy-text">
          <input type="checkbox" id="privacy" />
          <label htmlFor="privacy">
            Bu form ile toplanan kişisel verileriniz talebinize dair işlemlerin yerine getirilmesi ve 
            paylaşmış olduğunuz iletişim adresi üzerinden tanıtım, bülten ve pazarlama içerikleri 
            gönderilmesi amacıyla{" "}
            <a
              href="https://example.com/kullanici-aydinlatma-metni"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kullanıcı Aydınlatma Metni
            </a>{" "}
            çerçevesinde işlenebilecektir.
          </label>
        </div>

      </div>

      {/* Sağdaki Görsel Alanı */}
      <div className="contact-image">
        <img src={require('../../Assets/Soydan.png')} alt="İletişim Görseli" />
      </div>
    </div>
  );
};

export default HomeContact;
