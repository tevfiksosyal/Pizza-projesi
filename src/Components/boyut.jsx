import React from 'react';
import './Boyut.css';

export default function Boyut({ onChange }) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <h1>Boyut Seç*</h1>
      <form>
        <div className="radio-container">
          <input type="radio" id="S" name="pizza_boyut" value="S" onChange={handleChange} />
          <label htmlFor="S">S</label>

          <input type="radio" id="M" name="pizza_boyut" value="M" onChange={handleChange} />
          <label htmlFor="M">M</label>

          <input type="radio" id="L" name="pizza_boyut" value="L" onChange={handleChange} />
          <label htmlFor="L">L</label>
        </div>
      </form>
    </div>
  );
}
