import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { useLoading } from '../context/LoadingContext'; 

const LoadingComponent = () => {
  const { isLoading } = useLoading();

  return (
    isLoading && (
      <div style={{position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,}}>
       <CircularProgress />
      </div>
    )
  );
};

export default LoadingComponent;
