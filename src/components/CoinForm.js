// src/components/CoinForm.js
import React, { useState } from 'react';

const CoinForm = ({ addCoin, setAddingCoin }) => {
  const [name, setName] = useState('');
  const [nominal, setNominal] = useState('');
  const [year, setYear] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Викликати функцію addCoin з параметрами
    addCoin({ name, nominal, year, image });
    // Очистити поля форми після додавання монети
    setName('');
    setNominal('');
    setYear('');
    setImage('');
    // Встановити addingCoin в false для повернення на головну сторінку
    setAddingCoin(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Назва:
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
      <button type="submit">Створити запис</button>
    </form>
  );
};

export default CoinForm;
