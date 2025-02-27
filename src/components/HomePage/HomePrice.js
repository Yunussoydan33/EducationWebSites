import React from "react";
import "./HomePrice.css"; // CSS dosyasını içe aktarıyoruz

const HomePrice = () => {
  return (
    <div className="home-price-container">
      {/* Kırmızı Bilgi Alanı */}
      <div className="price-banner">
        <h2>Soydan Katalog Nedir?</h2>
        <p>
        Soydan  Katalog, çalışanların tüm gelişim süreçleri için yararlanabilecekleri binlerce Türkçe dijital eğitimden
          oluşan özgür ve özgün bir gelişim kaynağıdır. Kurumları geleceğe taşıyacak yeteneklerin gelişimini desteklemek
          ve çalışanlara 21. yüzyıl becerilerini kazandırmak amacıyla hazırlanmıştır.
        </p>
      </div>

      {/* Üyelik Paketleri Bölümü */}
      <div className="price-content">
        <h2>Üyelik Paketleri Nelerdir?</h2>
        <p>Soydan katalog abonelik modelinde iki farklı katalog türü yer alır.</p>

        <div className="price-packages">
          {/* Basic Paketi */}
          <div className="package">
            <img src={require("../../Assets/basic.png")} alt="Basic Paket" className="package-icon" />
            <div className="package-info">
              <h3 className="basic">Basic</h3>
              <p className="package-count">6000'e yakın içerik</p>
              <p className="package-desc">
                Kurumun temelde ihtiyaç duyacağı, hem özel hem de iş hayatı için gerekli olabilecek, ana konuları ve
                yetkinlikleri kapsar.
              </p>
            </div>
          </div>

          <hr className="package-divider" />

          {/* Premium Paketi */}
          <div className="package">
            <img src={require("../../Assets/premium.png")} alt="Premium Paket" className="package-icon" />
            <div className="package-info">
              <h3 className="premium">Premium</h3>
              <p className="package-count">8000'e yakın içerik</p>
              <p className="package-desc">
                Basic Katalog içerisindeki eğitimlere ek olarak, hazır öğrenme deneyimleri haline getirdiğimiz gelişim
                yolculukları; liderlik eğitimleri ve yenilikçi öğrenme yöntemleri ile hazırlanmış eğitimleri kapsar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePrice;
