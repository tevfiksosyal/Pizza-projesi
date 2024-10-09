import React, { useState } from 'react';

const SiparisFormu = () => {
  const [siparisNotu, setSiparisNotu] = useState('');

  const handleInputChange = (e) => {
    setSiparisNotu(e.target.value);
  };

  return (
    <div>
      <h2>Sipariş Notu</h2>
      <textarea
        value={siparisNotu}
        onChange={handleInputChange}
        placeholder="Siparişine eklemek istediğin bir not var mı?"
        style={{ width: '100%', maxWidth: '100%', boxSizing: 'border-box' }} // Genişliği ayarladık
      />
    </div>
  );
};

export default SiparisFormu;
