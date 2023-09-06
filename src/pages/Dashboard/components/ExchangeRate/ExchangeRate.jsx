import React, { useState } from 'react';
import Input from '@mui/material/Input';
import IconButton from '@mui/material/IconButton';
import DoneIcon from '@mui/icons-material/Done';
import CancelIcon from '@mui/icons-material/Cancel';
import EditIcon from '@mui/icons-material/Edit';
import SyncIcon from '@mui/icons-material/Sync';
import './styles.scss';

export const ExchangeRate = ({
  getRealRates,
  editRate,
  editExchangeRates,
  setEditRate,
  rate,
  currentCurrency,
}) => {
  const [rateValue, setRateValue] = useState();
  return (
    <div className='exchange-rate'>
      <div className='exchange-rate__header'>
        <p>Eth exchange</p>
        <IconButton aria-label='donde' color='success' onClick={getRealRates}>
          <SyncIcon />
        </IconButton>
      </div>
      {editRate ? (
        <div className='exchange-rate__edit-mode'>
          <Input
            defaultValue={rate}
            onChange={(e) => setRateValue(e.target.value)}
            value={rateValue}
            type='number'
          />
          <div className='exchange-rate__edit-actions'>
            <IconButton
              aria-label='donde'
              color='success'
              onClick={() => {
                editExchangeRates(rateValue);
                setEditRate(false);
                setRateValue();
              }}
            >
              <DoneIcon />
            </IconButton>
            <IconButton
              aria-label='cancel'
              color='error'
              onClick={() => {
                setRateValue();
                setEditRate(false);
              }}
            >
              <CancelIcon />
            </IconButton>
          </div>
        </div>
      ) : (
        <div className='exchange-rate__readonly-mode'>
          <span>
            {rate} {currentCurrency}
          </span>
          <IconButton
            aria-label='edit'
            onClick={() => {
              setEditRate(true);
            }}
          >
            <EditIcon />
          </IconButton>
        </div>
      )}
    </div>
  );
};
