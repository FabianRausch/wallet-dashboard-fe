import React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './styles.scss';

export const AddressesList = ({
  addresses,
  addressSelected,
  setAddressSelected,
  setFavorite,
  deleteAddress,
}) => {
  return (
    <>
      {addresses.length ? (
        <List className='addresses-list'>
          {addresses.map((address) => (
            <ListItemButton
              key={address.id}
              selected={addressSelected === address.id}
              onClick={() => setAddressSelected(address.id)}
              secondaryAction={
                <>
                  <IconButton
                    color='warning'
                    edge='end'
                    aria-label='favorite'
                    onClick={() => setFavorite(address.id, !address.favorite)}
                  >
                    {address.favorite ? <FavoriteIcon /> : <FavoriteBorder />}
                  </IconButton>
                  <IconButton
                    edge='end'
                    aria-label='delete'
                    onClick={() => {
                      deleteAddress(address.id);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </>
              }
            >
              <ListItemText
                primary={address.id}
                secondary={address.isOld ? 'Is Old' : 'Is New'}
              />
            </ListItemButton>
          ))}
        </List>
      ) : (
        <div className='addresses-list__empty'>
          <p>There is not adedd addresses</p>
        </div>
      )}
    </>
  );
};
