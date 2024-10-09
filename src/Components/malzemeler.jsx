import React, { useState } from 'react';
import './malzemeler.css';

const CheckboxFormu = ({ onSelectionChange }) => {
  const [seciliOgeler, setSeciliOgeler] = useState({
    pepperoni: false,
    tavukIzgara: false,
    misir: false,
    sarimsak: false,
    ananas: false,
    sosis: false,
    soğan: false,
    sucuk: false,
    biber: false,
    kabak: false,
    kanadaJambonu: false,
    domates: false,
    jalapeno: false,
  });

  const handleChange = (event) => {
    const { name, checked } = event.target;

    if (checked) {
      const toplamSecim = Object.values(seciliOgeler).filter(Boolean).length;
      if (toplamSecim >= 10) {
        alert('En fazla 10 seçim yapabilirsiniz!');
        return;
      }
    }

    const yeniSeciliOgeler = {
      ...seciliOgeler,
      [name]: checked,
    };
    setSeciliOgeler(yeniSeciliOgeler);

    const secimSayisi = Object.values(yeniSeciliOgeler).filter(Boolean).length;
    onSelectionChange(secimSayisi);
  };

  return (
    <form className="checkbox-form">
      <div className="form-header">
        <h1>Ek Malzemeler</h1>
        <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
      </div>
      <div className="product-grid">
        {Object.keys(seciliOgeler).map((key) => (
          <div key={key} className="product-item">
            <input
              type="checkbox"
              id={key}
              name={key}
              checked={seciliOgeler[key]}
              onChange={handleChange}
            />
            <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
          </div>
        ))}
      </div>
    </form>
  );
};

export default CheckboxFormu;
