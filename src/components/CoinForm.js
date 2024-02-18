import React, { useState } from 'react';

const CoinForm = ({ addCoin, setAddingCoin }) => {
  const [name, setName] = useState('');
  const [nominal, setNominal] = useState('');
  const [year, setYear] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addCoin({ name, nominal, year, image });
    setName('');
    setNominal('');
    setYear('');
    setImage('');
    setAddingCoin(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Країна:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Номінал:
        <input type="text" value={nominal} onChange={(e) => setNominal(e.target.value)} />
      </label>
      <label>
        Рік випуску:
        <input type="text" value={year} onChange={(e) => setYear(e.target.value)} />
      </label>
      <label>
        Фото URL:
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
      </label>
      <button type="submit" className="create-coin-button">Створити запис</button>
    </form>
  );
};

export default CoinForm;
