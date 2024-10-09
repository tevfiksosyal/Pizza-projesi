import React from 'react';
import "./card2.css";
const ProductSection = () => {
  const products = [
    {
      id: 1,
      name: "Terminal Pizza",
      image: "./Assets/iteration-2-aseets/pictures/food-1.png",
      rating: 4.9,
      reviews: 200,
      price: "60₺",
    },
    {
      id: 2,
      name: "Position Absolute Acı Pizza",
      image: "./Assets/iteration-2-aseets/pictures/food-2.png",
      rating: 4.9,
      reviews: 200,
      price: "60₺",
    },
    {
      id: 3,
      name: "useEffect Tavuklu Burger",
      image: "./Assets/iteration-2-aseets/pictures/food-3.png",
      rating: 4.9,
      reviews: 200,
      price: "60₺",
    },
  ];

  return (
    <section className="urun container">
      {products.map(product => (
        <div key={product.id} className={product.name.toLowerCase().replace(/\s+/g, '-')}>
          <img src={product.image} alt={product.name} />
          <h1 className="urun-baslik">{product.name}</h1>
          <div className="derece">
            <h2>{product.rating}</h2>
            <h2>({product.reviews})</h2>
            <h2>{product.price}</h2>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductSection;
