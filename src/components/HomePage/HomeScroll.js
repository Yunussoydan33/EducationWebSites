import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomeScroll.css"; // CSS dosyasını içe aktarıyoruz

const HomeScroll = () => {
  const settings = {
    dots: true, // Slider altında noktalar
    infinite: true, // Sonsuz döngü
    speed: 500, // Geçiş hızı
    slidesToShow: 1, // Ekranda aynı anda kaç resim görünecek
    slidesToScroll: 1, // Kaç resim kayacak
    autoplay: true, // Otomatik kaydırma
    autoplaySpeed: 3000, // 3 saniyede bir değiştir
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={require('../../Assets/egitim1.png')} alt="Eğitim 1" className="slider-img" />
        </div>
        <div>
          <img src={require("../../Assets/egitim2.png")} alt="Eğitim 2" className="slider-img" />
        </div>
        <div>
          <img src={require("../../Assets/egitim3.png")} alt="Eğitim 3" className="slider-img" />
        </div>
      </Slider>
    </div>
  );
};

export default HomeScroll;
