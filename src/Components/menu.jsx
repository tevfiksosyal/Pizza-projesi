import React from 'react';
import "./menu.css";

const Menu = () => {
  const menuItems = [
    { src: './Assets/Iteration-2-aseets/icons/1.svg', label: 'YENİ! Kore' },
    { src: './Assets/Iteration-2-aseets/icons/2.svg', label: 'Pizza' },
    { src: './Assets/Iteration-2-aseets/icons/3.svg', label: 'Burger' },
    { src: './Assets/Iteration-2-aseets/icons/4.svg', label: 'Kızartmalar' },
    { src: './Assets/Iteration-2-aseets/icons/5.svg', label: 'Fast food' },
    { src: './Assets/Iteration-2-aseets/icons/6.svg', label: 'Gazlı İçecek' },
  ];

  return (
    <section className="menu">
      <nav className="menu-item">
        {menuItems.map((item, index) => (
          <a href="#" key={index}>
            <img src={item.src} alt={item.label} /> {item.label}
          </a>
        ))}
      </nav>
    </section>
  );
};

export default Menu;
