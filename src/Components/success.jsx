import './Success.css'; 
import { useLocation } from 'react-router-dom';

export default function Success() {
  const location = useLocation();
  const { boyut, kalinlik, secimSayisi } = location.state || {};

  return (
    <div className="sonuc">
      <img src="./Assets/Iteration-1-assets/logo.svg" alt="Logo" className="logo" />
      <h1 className="message">TEBRİKLER! SİPARİŞİNİZ ALINDI!</h1>
      <p>Boyut: {boyut ? boyut : 'Seçilmedi'}</p>
      <p>Hamur: {kalinlik ? kalinlik : 'Seçilmedi'}</p>
      <p>Seçilen Malzeme Sayısı: {secimSayisi || 0}</p>
    </div>
  );
}
