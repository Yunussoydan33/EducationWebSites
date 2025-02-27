import React from "react";
import "./HomeWrite.css"; // CSS dosyasını içe aktarıyoruz

const HomeWrite = () => {
  return (
    <div className="home-write-container">
      {/* Sol Taraf - Yazı İçeriği */}
      <div className="text-section">
        <h1>Online Eğitim Platformu</h1>
        <p>
          Eğitim platformumuz, öğrencilere ve eğitmenlere kapsamlı bir öğrenme deneyimi sunar. 
          <b>Video dersler</b>, <b>canlı online dersler</b> ve <b>bireysel eğitim seansları</b> ile her seviyeye uygun eğitim imkanları sağlar. 
          Ayrıca öğrenciler, <b>quizler</b> ve <b>etkileşimli sınavlarla</b> bilgilerini test edebilir.
        </p>
        <p>
          Platformumuzda <b>öğrenciler ve eğitmenler</b> arasındaki iletişimi güçlendiren bir <b>Keşfet</b> alanı bulunur. 
          Burada ders hakkında tartışmalar yapılabilir, notlar paylaşılabilir ve grup çalışmaları organize edilebilir. 
          Böylece öğrenciler hem akademik hem de sosyal olarak gelişebilir.
        </p>
        <p>
          <b>Öne Çıkan Özellikler:</b>
          <ul>
            <li>📚 Kapsamlı <b>video ders içerikleri</b></li>
            <li>🎥 Gerçek zamanlı <b>canlı dersler</b> ve etkileşimli eğitim</li>
            <li>📝 Öğrencilerin gelişimini izleyen <b>quizler</b> ve <b>sınavlar</b></li>
            <li>👥 Dersler hakkında <b>sosyalleşme ve tartışma</b> alanı</li>
            <li>🎯 <b>Bireysel özel dersler</b> ile kişiye özel öğrenme</li>
          </ul>
        </p>
        <button className="start-button">Hemen Başla</button>
      </div>

      {/* Sağ Taraf - Görsel */}
      <div className="image-section">
        <img src={require('../../Assets/Soydan.png')} alt="Eğitim Platformu" />
      </div>
    </div>
  );
};

export default HomeWrite;
