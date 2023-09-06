import React from 'react';
import './styles.scss';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export const CurrencyDropdown = ({
  currencies,
  editCurrency,
  currentCurrency,
}) => {
  return (
    <div>
      <InputLabel id='demo-simple-select-label'>Currency</InputLabel>
      <Select
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        value={currentCurrency}
        label='Currency'
        onChange={(e) => editCurrency(e.target.value)}
      >
        {currencies.map((currency) => (
          <MenuItem key={currency} value={currency}>
            {currency}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};
