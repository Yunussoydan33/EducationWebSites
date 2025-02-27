import React from "react";
import "./LoginPage.css"; // CSS dosyasını içe aktarıyoruz

const LoginPage = () => {
  return (
    <div className="login-container">
      <h2 className="login-title">
        Türkiye'nin en çok kullanılan ve en zengin içeriğe sahip eğitim sitesine katılmak için lütfen üyelik türünüzü seçiniz.
      </h2>

      <div className="login-options">
        {/* Öğrenci Kartı */}
        <div className="login-card">
          <img src={require('../../Assets/student.png')} alt="Öğrenci" className="login-icon" />
          <h3>Öğrenci</h3>
          <p>İlkokul ve ortaokul öğrencileri kredi kartı, kapıda ödeme ve havale ile üye olabilir.</p>
          <button className="join-btn">Üye Ol</button>
          <button className="renew-btn">Üyeliğimi Yenile</button>
        </div>

        {/* Öğretmen Kartı */}
        <div className="login-card">
          <img src={require('../../Assets/teacher.png')} alt="Öğretmen" className="login-icon" />
          <h3>Öğretmen</h3>
          <p>İlkokul öğretmenleri ve branş öğretmenleri buradan üye olabilir.</p>
          <button className="join-btn disabled">Üye Ol</button>
        </div>

        {/* Veli Kartı */}
        <div className="login-card">
          <img src={require('../../Assets/parent.png')} alt="Veli" className="login-icon" />
          <h3>Veli</h3>
          <p>Morpa Kampüs üyesi çocuğunuz varsa buradan veli üyeliği açabilirsiniz.</p>
          <button className="join-btn disabled">Üye Ol</button>
        </div>

        {/* Sınıf Üyeliği Kartı */}
        <div className="login-card">
          <img src={require('../../Assets/class.png')} alt="Sınıf Üyeliği" className="login-icon" />
          <h3>Sınıf Üyeliği</h3>
          <p>Sınıf yetkilisi tarafından verilen üye kodu ile devam edin.</p>
          <button className="join-btn">Üye Ol</button>
          <button className="renew-btn">Üyeliğimi Yenile</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
