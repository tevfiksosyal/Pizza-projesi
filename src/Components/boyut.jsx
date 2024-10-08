import React from 'react';

export default function Boyut() {
  return (
    <div>
      <p>Boyut Seç*</p>
      <form>
        <input type="radio" id="küçük" name="pizza_boyut" value="Küçük" />
        <label htmlFor="küçük">Küçük</label><br />
        
        <input type="radio" id="orta" name="pizza_boyut" value="Orta" />
        <label htmlFor="orta">Orta</label><br />
        
        <input type="radio" id="büyük" name="pizza_boyut" value="Büyük" />
        <label htmlFor="büyük">Büyük</label>
      </form>
    </div>
  );
}
