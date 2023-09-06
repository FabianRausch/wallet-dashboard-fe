import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import './styles.scss';

export const DashSkeleton = () => {
  return (
    <>
      {/* <Skeleton variant='text' sx={{ fontSize: '1rem' }} /> */}
      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant='rectangular' width={500} height={250} />
      {/* <Skeleton variant='rounded' width={210} height={60} /> */}
    </>
  );
};
