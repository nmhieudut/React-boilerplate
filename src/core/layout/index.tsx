import React from 'react';
import Routers from 'routers';
import { BrowserRouter } from 'react-router-dom';

export const Layout = () => {
  return (
    <BrowserRouter>
      <header className='text-center'>My App</header>
      <Routers />
    </BrowserRouter>
  );
};
