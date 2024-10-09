import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <footer className="son">
        <div className="footer-son foot">
          <div className="son-ilk">
            <h1>Teknolojik Yemekler</h1>
            <nav className="nav-son">
              <a className="son-a" href="">
                <img src="./Assets/iteration-2-aseets/footer/icons/icon-1.png" alt="Address" />
                341 Londonderry Road, Istanbul Türkiye
              </a>
              <a className="son-a" href="mailto:aciktim@teknolojikyemekler.com">
                <img src="./Assets/iteration-2-aseets/footer/icons/icon-2.png" alt="Email" />
                aciktim@teknolojikyemekler.com
              </a>
              <a className="son-a" href="tel:+902161234567">
                <img src="./Assets/iteration-2-aseets/footer/icons/icon-3.png" alt="Phone" />
                +90 216 123 45 67
              </a>
            </nav>
          </div>
          <div className="son-iki">
            <h1>Hot Menu</h1>
            <p>Terminal Pizza</p>
            <p>5 Kişilik Hackathlon Pizza</p>
            <p>useEffect Tavuklu Pizza</p>
            <p>Beyaz Console Frosty</p>
            <p>Testler Geçti Mutlu Burger</p>
            <p>Position Absolute Acı Burger</p>
          </div>
          <div className="son-uc">
            <h1>Instagram</h1>
            <div className='son-uc-img'>
            <img src="./Assets/iteration-2-aseets/footer/insta/li-0.png" alt="Instagram 1" />
            <img src="./Assets/iteration-2-aseets/footer/insta/li-1.png" alt="Instagram 2" />
            <img src="./Assets/iteration-2-aseets/footer/insta/li-2.png" alt="Instagram 3" />
            <img src="./Assets/iteration-2-aseets/footer/insta/li-3.png" alt="Instagram 4" />
            <img src="./Assets/iteration-2-aseets/footer/insta/li-4.png" alt="Instagram 5" />
            <img src="./Assets/iteration-2-aseets/footer/insta/li-5.png" alt="Instagram 6" />
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer-icon">
        <div className="foot">
          <p>© 2023 Teknolojik Yemekler.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
