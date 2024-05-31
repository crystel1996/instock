import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { ROUTER } from './Router';

function App() {
  return (
    <RouterProvider router={ROUTER} />
  );
}

export default App;
