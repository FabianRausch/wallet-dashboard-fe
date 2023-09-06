import React from 'react';
import { useWrite } from '../../../../hooks/useWrite';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './styles.scss';

export const AddressForm = ({ addAddress }) => {
  const [text, cleanText, handleWrite] = useWrite();
  const handleAdd = () => {
    addAddress(text);
    cleanText();
  };
  return (
    <div className='address-form'>
      <TextField
        className='address-form__textfield'
        onChange={handleWrite}
        value={text}
        id='outlined-basic'
        label='Address'
        variant='outlined'
      />
      <Button
        className='address-form__button'
        disabled={!text}
        variant='contained'
        color='success'
        onClick={handleAdd}
      >
        Add
      </Button>
    </div>
  );
};
