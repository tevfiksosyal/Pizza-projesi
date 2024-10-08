import React from 'react';

export default function Kalinlik() {
  return (
    <div>
        <h1>Hamur Seç*</h1>
      <select>
        <option value="0">-Hamur Kalınlığı Seç-</option>
        <option value="1">ince</option>
        <option value="2">Normal</option>
        <option value="3">Kalın</option>
      </select>
    </div>
  );
}
