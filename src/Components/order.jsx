import React, { useState } from 'react';
import './order.css';
import { Link } from 'react-router-dom';
import Boyut from './boyut';
import Kalinlik from './kalinlik';
import CheckboxFormu from './malzemeler';
import SiparisFormu from './siparisnotu';
import UrunSayisi from './urunsayisi';

export default function Order() {
  const [secimSayisi, setSecimSayisi] = useState(0);
  const [urunSayisi, setUrunSayisi] = useState(1);
  const [boyut, setBoyut] = useState('');
  const [kalinlik, setKalinlik] = useState('');

  const pizzaFiyati = 85.50;
  const malzemeFiyati = 5.00;
  
  const secimlerFiyati = secimSayisi * malzemeFiyati;
  const toplamFiyat = (pizzaFiyati + secimlerFiyati) * urunSayisi; 

  const isButtonDisabled = !boyut || !kalinlik || secimSayisi < 4;

  return (
    <>
      <div className='head'>
        <img className='img' src="./Assets/Iteration-1-assets/logo.svg" alt="Logo" />
      </div>
      <div className='container'>
        <img src='./Assets/Iteration-2-aseets/pictures/form-banner.png' alt="Banner" />
        <h1>Anasayfa - Siparişi Oluştur</h1>
      </div>
      <div className='container price'>
        <h1>Position Absolute Acı Pizza</h1>
        <p>{pizzaFiyati.toFixed(2)}₺</p>
        <span className='point'>
          <p>4.9</p><p>(200)</p>
        </span>
      </div>
      <div className='container'>
        <p>
          Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. 
          Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, 
          daha sonra geleneksel olarak odun ateşinde yüksek sıcaklıkta pişirilen, 
          genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan 
          İtalyan kökenli lezzetli bir yemektir.
        </p>
      </div>
      <div className='container form1'>
        <Boyut onChange={setBoyut} />
        <Kalinlik onChange={setKalinlik} />
      </div>
      <div className='container form2'>
        <CheckboxFormu onSelectionChange={setSecimSayisi} />
      </div>
      <div className='container'>
        <SiparisFormu />
      </div>
      <div className='container form3'>
        <UrunSayisi onChange={setUrunSayisi} />
        <div className='toplam'>
          <h1>Sipariş Toplamı</h1>
          <p>Seçimler: {secimlerFiyati.toFixed(2)}₺</p>
          <p>Toplam: {toplamFiyat.toFixed(2)}₺</p>
          <Link to="/success" state={{ boyut, kalinlik, secimSayisi }}>
            <button disabled={isButtonDisabled}>SİPARİŞ VER</button>
          </Link>
        </div>
      </div>
    </>
  );
}
