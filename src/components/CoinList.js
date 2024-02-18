import React from 'react';

const CoinList = ({ coins, removeCoin }) => {
  return (
    <div className="coin-list">
      {coins.map((coin) => (
        <div key={coin.id} className="coin-item">
          <img src={coin.image} alt={coin.name} className="coin-image" />
          <p>{coin.name}</p>
          <p>{coin.country}</p>
          <p>{coin.nominal}</p>
          <p className="coin-year">{coin.year}</p>
          <button onClick={() => removeCoin(coin.id)} className="delete-coin-button">Видалити</button>
        </div>
      ))}
    </div>
  );
};

export default CoinList;
