import React from 'react';

export default function Kalinlik({ onChange }) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <h1>Hamur Seç*</h1>
      <select onChange={handleChange}>
        <option value="">-Hamur Kalınlığı Seç-</option>
        <option value="ince">İnce</option>
        <option value="normal">Normal</option>
        <option value="kalın">Kalın</option>
      </select>
    </div>
  );
}
