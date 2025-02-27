import React from "react";
import "./HomeInfo.css"; // CSS dosyasını içe aktarıyoruz

const HomeInfo = () => {
  return (
    <div className="home-info-container">
      {/* Üst Başlık */}
      <h2 className="info-title">
        2 Adımda sizi yeni çağa hazırlayacak, dijital öğrenme platformu ve Türkçe dijital eğitim kaynağı aboneliği!
      </h2>

      {/* Video ve Açıklamalar */}
      <div className="info-content">
        {/* İlk Video ve Açıklama */}
        <div className="info-item">
          <iframe
            className="info-video"
            src="https://www.youtube.com/embed/R55vXluB1f4"
            title="Kurumsal Dijital Öğrenme"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <h3>1. Kurumsal dijital öğrenme platformunuz kurulur.</h3>
          <p>
            Enocta Platform Nedir? Enocta Platform’dan nasıl yararlanabilirsiniz? Dijital içerikleri, yapay zeka destekli,
            sizi tanıyan, keyifli yepyeni bir öğrenme ortamı olan Enocta Platform’dan deneyimleyin!
          </p>
        </div>

        {/* İkinci Video ve Açıklama */}
        <div className="info-item">
          <iframe
            className="info-video"
            src="https://www.youtube.com/embed/_fr4V_j71Zg"
            title="Katalog Aboneliği"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <h3>2. Seçiminize göre katalog aboneliğiniz başlar.</h3>
          <p>
            Abonelik modeli nedir? Faydaları nelerdir? Abone olabileceğiniz Enocta Katalog, alanında uzman eğitmenler tarafından hazırlanmış, 
            konu uzmanı videoları, motion graphic videolar, okuma materyalleri, özel görevler, etkileşimli eğitimlerden oluşan Türkiye’nin en 
            zengin Türkçe dijital eğitim kataloğudur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeInfo;
