// src/App.js
import React, { useState, useEffect } from 'react';
import CoinList from './components/CoinList';
import CoinForm from './components/CoinForm';
import './App.css';

const App = () => {
  const [coins, setCoins] = useState([]);
  const [addingCoin, setAddingCoin] = useState(false);

  useEffect(() => {
    const savedCoins = JSON.parse(localStorage.getItem('coins')) || [];
    setCoins(savedCoins);
  }, []);

  const addCoin = (newCoin) => {
    const updatedCoins = [...coins, { ...newCoin, id: coins.length + 1 }];
    setCoins(updatedCoins);
    localStorage.setItem('coins', JSON.stringify(updatedCoins));
    setAddingCoin(false);
  };

  const removeCoin = (id) => {
    const updatedCoins = coins.filter((coin) => coin.id !== id);
    setCoins(updatedCoins);
    localStorage.setItem('coins', JSON.stringify(updatedCoins));
  };

  return (
    <div>
      <header>
        <h1>Каталог монет</h1>
      </header>
      <div className="coin-container">
        {addingCoin && <CoinForm addCoin={addCoin} setAddingCoin={setAddingCoin} />}
        <button className="add-coin-button" onClick={() => setAddingCoin(!addingCoin)}>
          {addingCoin ? 'Сховати форму' : 'Додати монету'}
        </button>
        <CoinList coins={coins} removeCoin={removeCoin} />
      </div>
    </div>
  );
};

export default App;
