import React from "react";
import "./Home.css";

export default function Home() {

  console.log("Test");

  return (
    <div className="home">
      {/* Hero Section (Tanıtım Videosu) */}
      <section className="hero">
        <video className="hero-video" autoPlay muted loop>
          <source src="/videos/madcar-intro.mp4" type="video/mp4" />
          Tarayıcınız video oynatmayı desteklemiyor.
        </video>
        <div className="hero-text">
          <h1>Madcar Yıkama Hizmetleri</h1>
          <p>
            Aracınız için en kaliteli ve hızlı temizlik hizmeti burada. 
            Yüksek kaliteli temizlik ve profesyonel ekip!
          </p>
          <button>Hizmetlerimize Göz At</button>
        </div>
      </section>
    </div>
  );
}
