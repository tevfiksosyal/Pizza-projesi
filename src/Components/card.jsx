import React from 'react';
import "./card.css";
const Card = () => {
  return (
    <section className="Card">
      <div className="leftside">
        <h1 className="baslik-lezzetus">Özel Lezzetus</h1>
        <h2 className="baslik-position">Position: Absolute Acı Burger</h2>
        <button className="btn2">SİPARİŞ VER</button>
      </div>
      <div className="rightside">
        <div className="kart2">
          <h1>Hackathlon Burger Menü</h1>
          <button className="btn2">SİPARİŞ VER</button>
        </div>
        <div className="kart3">
        <h1>
            <span className="ozel">Çoooook </span>hızlı npm gibi kurye
        </h1>
          <button className="btn2">SİPARİŞ VER</button>
        </div>
      </div>
    </section>
  );
};

export default Card;
