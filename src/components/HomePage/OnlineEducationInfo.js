import React from "react";
import "./OnlineEducationInfo.css"; // CSS dosyasını içe aktarıyoruz

const OnlineEducationInfo = () => {
  return (
    <div className="education-info-container">
      {/* Üst Başlık */}
      <h2 className="education-title">Online Eğitim Platformunun Özellikleri Nelerdir?</h2>

      {/* İçerik Bölümü */}
      <div className="education-content">
        {/* Sol Taraf - Görsel */}
        <div className="education-image">
          <img src={require('../../Assets/onlineEducation.png')} alt="Online Eğitim" />
        </div>

        {/* Sağ Taraf - Metin ve Liste */}
        <div className="education-text">
          <p>Online Eğitim Platformunun Özellikleri Nelerdir?</p>
          <ul>
            <li>📊 Kişiselleştirilmiş Öğrenme Deneyimi</li>
            <li>🎯 Kendi Hızınızda Öğrenme İmkanı</li>
            <li>📅 Esnek Zamanlama Seçenekleri</li>
            <li>🌍 Dünyanın Her Yerinden Erişim</li>
            <li>👨‍🏫 Etkileşimli ve Canlı Dersler</li>
            <li>📱 Mobil ve Tablet Uyumlu Eğitim</li>
            <li>📱 Geniş Kurs Yelpazesi</li>
            <li>📱 Öğretmen ve Öğrenci İçin Ayrı Paneller</li>
            <li>📱 Keşfet Bölümü ile Kapsamlı İçerik Sunumu</li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default OnlineEducationInfo;
