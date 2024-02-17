// src/components/CoinList.js
import React from 'react';
import Coin from './Coin';

const CoinList = ({ coins, removeCoin }) => {
  return (
    <div>
      <h2> </h2>
      {coins.map((coin) => (
        <div key={coin.id}>
          <Coin coin={coin} />
          <button onClick={() => removeCoin(coin.id)}>Видалити</button>
        </div>
      ))}
    </div>
  );
};

export default CoinList;
