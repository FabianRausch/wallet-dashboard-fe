import React, { useState } from 'react';
import { useAddresses } from '../../hooks/useAddresses';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { AddressForm } from './components/AddressForm';
import './styles.scss';
import { AddressesList } from './components/AddressesList';
import { useExchangeEthRates } from '../../hooks/useExchangeEthRates';
import { useCurrencyConfig } from '../../hooks/useCurrencyConfig';
import { useBalance } from '../../hooks/useBalance';
import { ExchangeRate } from './components/ExchangeRate';
import { AddressesBalance } from './components/AddressBalance';
import { CurrencyDropdown } from './components/CurrencyDropdown';

export const Dashboard = () => {
  const [addressSelected, setAddressSelected] = useState('');
  const [addresses, addAddress, setFavorite, deleteAddress, loading] =
    useAddresses();
  const [currentCurrency, currencies, editCurrency, loadingCurrency] =
    useCurrencyConfig();
  const [editExchangeRates, getRealRates, rate, loadingRates] =
    useExchangeEthRates(currentCurrency);
  const [balance, ethBalance, balanceCurrency, loadindBalance] = useBalance(
    addressSelected,
    currentCurrency,
    rate
  );

  const [editRate, setEditRate] = useState(false);

  return (
    <div className='dashboard'>
      <AddressForm addAddress={addAddress} />
      <AddressesList
        addressSelected={addressSelected}
        setAddressSelected={setAddressSelected}
        addresses={addresses}
        setFavorite={setFavorite}
        deleteAddress={deleteAddress}
      />
      <hr className='dashboard__line' />
      <ExchangeRate
        getRealRates={getRealRates}
        editRate={editRate}
        editExchangeRates={editExchangeRates}
        setEditRate={setEditRate}
        rate={rate}
        currentCurrency={currentCurrency}
      />
      <hr className='dashboard__line' />
      <CurrencyDropdown
        currencies={currencies}
        editCurrency={editCurrency}
        currentCurrency={currentCurrency}
      />
      <hr className='dashboard__line' />
      <AddressesBalance
        addressSelected={addressSelected}
        loadindBalance={loadindBalance}
        ethBalance={ethBalance}
        balanceCurrency={balanceCurrency}
        balance={balance}
      />
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading || loadindBalance || loadingCurrency || loadingRates}
      >
        <CircularProgress color='inherit' />
      </Backdrop>
    </div>
  );
};
