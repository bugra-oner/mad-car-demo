import React from "react";
import "./Home.css";

// Resimleri import ettik
import logo from "../assets/logo.jpg";
import madCar from "../assets/madCar.jpg";
import taksitKampanyasi from "../assets/taksitKampanyasi.jpg";

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-text">
          <h1>Madcar Yıkama Hizmetleri</h1>
          <p>
            Aracınız için en kaliteli ve hızlı temizlik hizmeti burada. Yüksek
            kaliteli temizlik ve profesyonel ekip!
          </p>
          <button>Hizmetlerimize Göz At</button>
        </div>
      </section>

      {/* Hizmet Kartları (2 Kart) */}
      <section className="services">
        <div className="service-card">
          <img
            src={madCar}  // madCar resmini doğru şekilde import ettik
            alt="Madcar"
            className="service-img"
          />
          <h3>Madcar Hizmetleri</h3>
          <p>En kaliteli ve hızlı temizlik hizmeti.</p>
        </div>
        <div className="service-card">
          <img
            src={logo}  // logo resmini doğru şekilde import ettik
            alt="Logo"
            className="service-img"
          />
          <h3>İç Temizlik</h3>
          <p>Aracınızın içini temizleyin, ferahlatın.</p>
        </div>
        <div className="service-card">
          <img
            src={taksitKampanyasi}  // kampanya resmini doğru şekilde import ettik
            alt="Taksit Kampanyası"
            className="service-img"
          />
          <h3>Taksit Kampanyası</h3>
          <p>Aracınızı taksitle yıkatın!</p>
        </div>
      </section>
    </div>
  );
}
