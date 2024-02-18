import React, { useState, useEffect } from 'react';
import CoinList from './components/CoinList';
import CoinForm from './components/CoinForm';
import './App.css';

const App = () => {
  const [coins, setCoins] = useState([]);
  const [addingCoin, setAddingCoin] = useState(false);
  const [searchName, setSearchName] = useState('');
  const [searchYear, setSearchYear] = useState('');
  const [showAllCoins, setShowAllCoins] = useState(true);

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

  const searchCoins = () => {
    const filteredCoins = coins.filter((coin) => {
      const nameMatch = coin.name.toLowerCase().includes(searchName.toLowerCase());
      const yearMatch = coin.year.toString().includes(searchYear);

      return nameMatch && yearMatch;
    });

    setCoins(filteredCoins);
    setShowAllCoins(false);
  };

  const showAllCoinsHandler = () => {
    setSearchName('');
    setSearchYear('');
    const savedCoins = JSON.parse(localStorage.getItem('coins')) || [];
    setCoins(savedCoins);
    setShowAllCoins(true);
  };

  return (
    <div>
      <header>
        <h1>Каталог монет</h1>
      </header>
      <div className="coin-container">
        <button className="add-coin-button" onClick={() => setAddingCoin(!addingCoin)}>
          {addingCoin ? 'Сховати форму' : 'Додати монету'}
        </button>
        {addingCoin && <CoinForm addCoin={addCoin} setAddingCoin={setAddingCoin} />}
        <div className="search-form">
          <input
            type="text"
            placeholder="Країна"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Рік випуску"
            value={searchYear}
            onChange={(e) => setSearchYear(e.target.value)}
          />
          <button onClick={searchCoins}>Пошук</button>
          <button className="show-all-coins-button" onClick={showAllCoinsHandler}>
            Показати всі монети
          </button>
        </div>
        <CoinList coins={showAllCoins ? coins : coins.filter((coin) => coin.name.toLowerCase().includes(searchName.toLowerCase()) && coin.year.toString().includes(searchYear))} removeCoin={removeCoin} />
      </div>
    </div>
  );
};

export default App;
