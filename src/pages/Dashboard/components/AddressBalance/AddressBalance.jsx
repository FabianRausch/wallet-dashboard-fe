import React from 'react';
import './styles.scss';

export const AddressesBalance = ({
  addressSelected,
  loadindBalance,
  ethBalance,
  balanceCurrency,
  balance,
}) => {
  return (
    <div>
      {addressSelected && !loadindBalance ? (
        <div>
          <p>Blance</p>
          <span>eth: {ethBalance}</span>
          <br />
          <span></span> {balanceCurrency}: {balance}
        </div>
      ) : (
        <div>
          <p>Select an address</p>
        </div>
      )}
    </div>
  );
};
