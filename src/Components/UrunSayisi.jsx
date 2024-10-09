import React, { useState, useEffect } from 'react';
import './UrunSayisi.css';

const UrunSayisi = ({ onChange }) => {
  const [urunSayisi, setUrunSayisi] = useState(1);

  const artir = () => {
    setUrunSayisi(prevSayisi => {
      const yeniSayisi = prevSayisi + 1;
      onChange(yeniSayisi); // Güncel ürün sayısını gönder
      return yeniSayisi;
    });
  };

  const azalt = () => {
    if (urunSayisi > 1) {
      setUrunSayisi(prevSayisi => {
        const yeniSayisi = prevSayisi - 1;
        onChange(yeniSayisi); // Güncel ürün sayısını gönder
        return yeniSayisi;
      });
    }
  };

  // useEffect ile güncel urunSayisi'ni parent bileşene ilet
  useEffect(() => {
    onChange(urunSayisi);
  }, [urunSayisi, onChange]);

  return (
    <div className="urun-sayisi-container">
      <button onClick={azalt}>-</button>
      <span className="urun-sayisi">{urunSayisi}</span>
      <button onClick={artir}>+</button>
    </div>
  );
};

export default UrunSayisi;
