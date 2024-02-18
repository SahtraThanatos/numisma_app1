import React from 'react';

const Coin = ({ coin }) => {
  return (
    <div>
      <img src={coin.image} alt={coin.nominal} />
      <p>{coin.nominal}</p>
      <p>{coin.country}</p>
    </div>
  );
};

export default Coin;
